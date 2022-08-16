import React from 'react';
import { useNavigate } from 'react-router-dom';

const SearchResultsRow = ( { house } ) => {

    const history = useNavigate();   

    const setActive = () => {
        history(`/house/${house.id}`);
    };

    return (
       
        <tr onClick={setActive}>
            <td>
                {house.address}
            </td>
            <td>
                {house.price}
            </td>
            <td>
                {house.likes}
            </td>
        </tr>

    );
};

export default SearchResultsRow;