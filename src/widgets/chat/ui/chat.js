import { Circle } from "../../../shared";

function Chat({color, userName, productName, lastMessage, date, countMessage,
    click, settingMode}) {
    
        return(
        <div className="chat" onClick={click}>
            <div className="mark">
                <Circle mark color={color} />
            </div>
            <div className="chat-info">
                <div className="chat-start-block">
                    <div className="user-name bold">{userName}</div>
                    <div className="product-name regular">«{productName}»</div>
                    <div className="last-message regular">{lastMessage}</div>
                </div>

                <div className="chat-end-block">
                    <div className="message-date regular">
                        {date}
                    </div>

                    <div className={`count-message regular ${settingMode ? "setting" : "" }`}>
                        {
                            settingMode ? <div> </div> : countMessage
                        }

                    </div>

                    <div></div>

                </div>
            </div>
        </div>
    )
}


export default Chat;