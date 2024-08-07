import { SvgHome } from "../../../shared";
import Circle from "../../../shared/ui/Circle";
import { HiOutlinePlus } from "react-icons/hi";


function LeftPanel({settingMode}) {
    return (
        
        
        <div className="left-panel">

            <div className="list-circle"> 
                    <Circle color="blue" isActive={settingMode} click={() => {}} />
                    <Circle color="yellow" isActive={settingMode} click={() => {}} />
                    <Circle color="white-gray" isActive={settingMode} click={() => {}} />
                    <Circle color="green" isActive={settingMode} click={() => {}} />
                    <Circle color="red" isActive={settingMode} click={() => {}} />
            </div>



            <div className="functions-panel">
                <div className="function">
                    <SvgHome />
                </div>
                <div className="function">
                    <HiOutlinePlus size={18} />
                </div>
            </div>

            <div className="list-account"> 
                <div className="accounts">
                    <Circle account color="gray" text="1" click={() => {}} />
                    <Circle account color="gray" text="2" click={() => {}} />
                    <Circle account color="gray" text="3" click={() => {}} />
                    <Circle account color="gray" text="4" click={() => {}} />
                    <Circle account color="gray" text="5" click={() => {}} />
                </div>
            </div>
        
        
        </div>
 
    )
}


export default LeftPanel;