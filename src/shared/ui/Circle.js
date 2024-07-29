
import { HiOutlinePlus } from "react-icons/hi";


function Circle({account, mark, color, isActive, click, text}) {
    return (

        <div className={`circle ${color} ${account ? "account" : ""} ${mark ? "mark-circle" : ""} `} onClick={click}>
            {
                mark ? <div></div> :
                    text ? 
                        <div className="regular black">{text}</div> : isActive ?
                            <HiOutlinePlus /> : <div></div> 
            } 
        </div>
 

    );
}

export default Circle;