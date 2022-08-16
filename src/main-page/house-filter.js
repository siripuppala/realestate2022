import React from 'react';
import { useNavigate } from 'react-router';

const HouseFilter = ( {allHouses} ) => {
    const countries = allHouses  ? Array.from(new Set(allHouses.map( (h) => h.country))) : [];
    const history = useNavigate();

    countries.unshift(null);

    const onSearchChange = (e) =>{
        const country = e.target.value;
        history(`searchresults/${country}`);
    }

    return (
        <div className="row mt-3">
            <div className="offset-md-2 col-md-4">
                Look for your house in a country:
            </div>
            <div className="col-md-4 mb-3">
                <select className="form-select" onChange={onSearchChange}>
                    {countries.map( (c) => 
                    <option key={c} value={c}>
                        {c}
                    </option>
                    )}
                </select>
            </div>
                        
        </div>
    );
};

export default HouseFilter;