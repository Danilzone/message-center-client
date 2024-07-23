import '../../../shared/ui/styles/css/style.css';

import { UserApi } from '../../../feature';
import { Button, Input, Loading } from '../../../shared';

import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
function RegistrationForm() {
    
    const navigation = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [twoPassword, setTwoPassword] = useState('')

    const [err, setErr] =  useState('')

    const [loading, setLoading] = useState(false)

    const sendData = () => {

        setLoading(true)
        
        if (email && password && twoPassword) {
            
            if (password === twoPassword) {
                setErr('') 
                
                const data = {
                    email: email,
                    password: password
                }

                UserApi.registration(data)
                .then((res) => {
                    if(!res) {
                        alert("Ошибка. Пожалуйста, повторите попытку позже")
                    } else {
                        navigation('/main', {state: {token: `${res.data.access_token}--reg`}})
                    }
                })
                .finally(() => setLoading(false))

            } else {
                setLoading(false)
                setErr('Пароли не совпадают')
            }
        } else {
            setLoading(false)
            setErr('Данные не введены')
        }

    }

    return(
        <div className="wrapper-center ">
            <div className='form'>
            {err && <div className='error-text medium'>{err}</div>}
            {loading && <Loading/>}
                <div className='form-name bold'>Регистрация</div>
                <Input placeholder="Почта" inputChange={setEmail} />
                <Input placeholder="Пароль" password inputChange={setPassword} />
                <Input placeholder="Повторите пароль" password inputChange={setTwoPassword} />
                <Button text="Далее" click={sendData} />
            </div>
            <Link to={'/signin'} className='form-bottom-text bold' >Войти</Link>

        </div>
    )

}


export default RegistrationForm;