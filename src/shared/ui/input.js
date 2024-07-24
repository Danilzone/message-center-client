import './styles/css/style.css'
import { IoSearchOutline } from "react-icons/io5";

function Input({search, placeholder, password, inputChange}) {
    return (
        <div className={`block-input${search ? " input-search" : ""}`}>
            {search && <IoSearchOutline className="search-icon" size={24}/>}
            <input className={`input ${search ? "search" : ""}`} type={password ? 'password' : 'text'} placeholder={placeholder} onChange={e  => inputChange(e.target.value)} />
        </div>
    )
}

export default Input;