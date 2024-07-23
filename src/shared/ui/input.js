import './styles/css/style.css'

function Input({placeholder, password, inputChange}) {
    return (
        <input className='input' type={password ? 'password' : 'text'} placeholder={placeholder} onChange={e  => inputChange(e.target.value)} />
    )
}

export default Input;