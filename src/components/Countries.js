import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Countries = () => {
    const [data, setData] = useState([]);
    const [rangeValue, setRangeValue] = useState(12);
    const Continents = ["Africa", "Europe", "Asia", "Americas"];
    const [selectedContinent, setSelectedContinent] = useState('');


    useEffect(() => {
        axios.get('https://restcountries.com/v2/all?fields=name,capital,flag,population,region')
        .then((res) => setData(res.data));

        console.log(data);

      },[selectedContinent]);

    return (
        <div className='Countries'>
            <div className=''>
                <label htmlFor="customRange" className="form-label">Nbre de pays</label>
                <input type="range" className="form-range" min="1" max="250" 
                defaultValue={rangeValue} id="customRange"
                onChange={(e) => setRangeValue(e.target.value) } /><span>{rangeValue}</span>
                
                {Continents.map(continent => 
                   <div className="form-check form-check-inline" key={continent}>
                        <input className="form-check-input" 
                        type="radio" 
                        name="inlineRadioOptions"
                        id={continent} 
                        onChange={(e) => setSelectedContinent(e.target.id)} />
                        <label className="form-check-label" htmlFor={continent}>{continent}</label>
                  </div> 
                    
                    )}          
            </div>
            <div className='container'>
            <div className='row justify-content-md-center'>
                    {data
                    .slice(0, rangeValue)    // copie un nbre de pays a afficher
                    .filter(country => country.region.includes(selectedContinent)) // trie en fonction de la region
                    .sort((a, b) => a.population - b.population) // trie en fonction de la population
                    .map((country) => 
                        <div className="card" key={country.name}>
                            <img src={country.flag} className="card-img-top" alt="..."/>
                            <div className='card-body'>
                                <h3 className="card-text">{country.name}</h3>
                                <p>Pop.: {country.population.toLocaleString()}</p>
                            </div>
                        </div>
                    )}
             </div>
             </div>
        </div>
    );
};

export default Countries;