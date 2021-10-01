import React from 'react'
import CardMenu from 'components/CardMenu';
import hamburguesa from 'media/hamburguesa.png';
import pizza from '../media/pizza.png';

const index = () => {
    return (
    <div>
        <ul className='breedCard'>
            <CardMenu nombre='hamburguesa' imagen={hamburguesa}/>
            <CardMenu nombre='pizza' imagen={pizza}/>
        </ul>
    </div>
    )
};

export default index;
