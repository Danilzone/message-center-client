
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { LeftPanel } from '../../../widgets/leftpanel';

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

            <LeftPanel/>


        </div>
    )
}

export default MainPage;