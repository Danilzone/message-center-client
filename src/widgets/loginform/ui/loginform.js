import '../../../shared/ui/styles/css/style.css';

import { UserApi } from '../../../feature';
import { Button, Input, Loading } from '../../../shared';

import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
function LoginForm() {

    const navigation = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const [err, setErr] =  useState('')


    const sendData = () => {
        
        setLoading(true)


        if (email && password) {
            setErr('')
            const data = {
                username : email,
                password: password
            }
    
            UserApi.auth(data)
            .then((res) => {
                
                if(!res) {
                    alert("Ошибка. Пожалуйста, повторите попытку позже")
                } else {
                    navigation('/main', {state: {token: res.data.access_token}})
                }

            })
            .finally(() => setLoading(false))

        } else {
            setLoading(false)
            setErr('Данные не введены')
        }

        

    }

    return (

        <div className="wrapper-center">
            {err && <div className='error-text medium'>{err}</div>}
            {loading && <Loading/>}
                <div className='form'>
                    <div className='form-name bold'>Вход</div>
                    <Input placeholder="Логин" value={email} inputChange={setEmail}/>
                    <Input placeholder="Пароль" password inputChange={setPassword}/>

                    <Button text="Далее" click={sendData} />
                </div>
            <Link to={'/signup'} className='form-bottom-text bold'>Регистрация</Link>
        </div>

    )

}


export default LoginForm;