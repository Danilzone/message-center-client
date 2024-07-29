
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { LeftPanel, Search, Chat } from '../../../widgets';


function MainPage() {
        
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

    return(

        <div className='main-page'>

            <div className='main-left-block'>
                <LeftPanel/>
                <div className='chats-block'>
                    <Search/>

                    <div className="list-chats">
                        <div className="chats">
                            <Chat color="yellow" 
                            userName="Игорь Григорьев Игоревич" 
                            productName="Название товара" 
                            lastMessage="Последнее сообщение" 
                            date="22.05.2022"
                        />
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