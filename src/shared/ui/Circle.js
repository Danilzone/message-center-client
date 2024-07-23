
import { HiOutlinePlus } from "react-icons/hi";


function Circle({account, color, isActive, click, text}) {
    return (

        <div className={`circle ${color} ${account ? "account" : ""}`} onClick={click}>
            {
                text ? 
                    <div className="regular black">{text}</div> : isActive ?
                        <HiOutlinePlus /> : <div></div>
            } 
        </div>
 

    );
}

export default Circle;