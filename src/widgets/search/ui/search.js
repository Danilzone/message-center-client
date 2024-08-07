import '../../../shared/ui/styles/css/style.css';

import { PiDotsThreeOutline } from "react-icons/pi";

import { Input } from '../../../shared';
import { useState } from 'react';

function Search({click}) {

    const [searchText, setSearchText] = useState('')

    return (
        <div className="search-block">
            <Input search placeholder="Поиск" inputChange={setSearchText} />
            <div className="dots">
                <PiDotsThreeOutline size={28} onClick={click} />
            </div>
        </div>
    )

}

export default Search