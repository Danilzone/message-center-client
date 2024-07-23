import HashLoader from 'react-spinners/HashLoader';
import './styles/css/style.css';

function Loading() {
    return(
        <div className='loading'>
            <HashLoader color="#36d7b7" size={75}/>
        </div>
    )   
}


export default Loading;