import { Circle } from "../../../shared";

function Chat({color, userName, productName, lastMessage, date}) {
    return(
        <div className="chat">
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

                    <div className="">

                    </div>

                </div>
            </div>
        </div>
    )
}


export default Chat;