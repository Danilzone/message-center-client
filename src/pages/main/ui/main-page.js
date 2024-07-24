
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { LeftPanel } from '../../../widgets';
import { Search } from '../../../widgets';
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

                </div>
            </div>

            <div className='main-right-block'>

            </div>
        </div>
    )
}

export default MainPage;