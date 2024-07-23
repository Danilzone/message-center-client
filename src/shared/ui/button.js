import './styles/css/style.css'

function Button({text, click}) {
 
    return (
 
        <div className='button' onClick={click} >

             {text}
         </div>
 
     )
}

export default Button;