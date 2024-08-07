
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { LeftPanel, Search, Chat } from '../../../widgets';


function MainPage() {
        
    const [activeChat, setActiveChat] = useState('')
    const [settingMode, setSettingMode] = useState(false)

    const testServerData = [
        {
            id: "12124124124",
            color: "green",
            userName: "Игорь Григорьев Игоревич",
            productName: "Название товара",
            lastMessage: "Последнее сообщение",
            date: "22.05.2022",
            countMessage: 1
        },
        {
            id: "23523",
            color: "red",
            userName: "Игорь Григорьев Игоревич",
            productName: "Название товара",
            lastMessage: "Последнее сообщение",
            date: "22.05.2022",
            countMessage: 2
        },
        {
            id: "457457",
            color: "yellow",
            userName: "Игорь Григорьев Игоревич",
            productName: "Название товара",
            lastMessage: "Последнее сообщение",
            date: "22.05.2022",
            countMessage: 3
        },
    ]


    const testServerDataChat = [
        {
            id: "msg-1243",
            put:  "out",
            text:  "text text text trdsdvws wef w",
            check:  true,
            time:  "12:00"
        },
      
        {
            id: "msg-12432",
            put:  "in",
            text:  "asp;ledfnvpwqenfpewn ifwenfbop2i34bfi0 23bf2p3oifb 23poifbp2eif203fbnsi0pfkasd asff",
            check:  true,
            time:  "12:12"
        },
      
        {
            id: "msg-1246",
            put:  "in",
            text:  "ншшщн7677ш679673rg3 f3 3f  3f34 sdvwswe'lfvpwef wef w",
            check:  true,
            time:  "12:14"
        },
      
        {
            id: "msg-124356",
            put:  "out",
            text:  "гобcwpecnwext text trdsdvws wef w",
            check:  true,
            time:  "13:46"
        },
        {
            id: "msg-124356",
            put:  "out",
            text:  "wenfpwenfcp wencwpecnwext text trdsdvws wef w",
            check:  true,
            time:  "13:48"
        },
      
    ]

    const [chatsEditList, setChatEditList] = useState([])

    // const location = useLocation()
    // const navigation = useNavigate()
    
    // const [token, setToken] = useState('')

    useEffect(() => {
        // try {
        //     setToken(location.state.token)
        // } catch {
        //     console.log('no token')
        //     navigation('/signin');
        // }
    }, []);


    const clickChat = (id) => {
        
        if (settingMode) {
            // console.log(`Чат ${id} добавлен в список`)
            setChatEditList([...chatsEditList, {id}])
        } else {
            console.log(chatsEditList)
            setActiveChat(id)
        }


    }

    const renderChats = () => {
        return testServerData.map((item) => {
            return(
                <Chat 
                    key={item.id}

                    id={item.id}
                    color={item.color} 
                    userName={item.userName} 
                    productName={item.productName} 
                    lastMessage={item.lastMessage} 
                    date={item.date}
                    countMessage={item.countMessage}
                    click={() => clickChat(item.id)}
                    
                    settingMode={settingMode}
              
                />
            )
        })
    }

    return(

        <div className='main-page'>

            <div className='main-left-block'>
                <LeftPanel settingMode={settingMode} />
                <div className='chats-block'>

                    <Search click={() => {setSettingMode(!settingMode)}} />

                    <div className="list-chats">
                        <div className="chats">
                        
                            {renderChats()}


                        </div>
                    </div>
                
                </div>
            </div>

            <div className='main-right-block'>

            </div>
        </div>
    )
}

export default MainPage;