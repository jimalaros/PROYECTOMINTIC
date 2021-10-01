import React from 'react'
import Slidehome from 'media/Slidehome.png';
import CardMenu from 'components/CardMenu';
import hamburguesa from 'media/hamburguesa.png';
import pizza from '../media/pizza.png';
import burro from 'media/burro.png';
import sandwich from 'media/sandwich.png';
import nuggets from 'media/nuggets.png';
import pinchos from 'media/pinchos.png';
import empanada from 'media/empanada.png';
import tacos from 'media/tacos.png';
import salchipapa from 'media/salchipapa.png';



const index = () => {
    return (
        <><div className Slidehome>
            <img src={Slidehome} alt='imagen'  className='Slidehome'  />
        </div><>
        

        <ul className='header1'>
            

            <li>
                <div className='buscar'>
                    <input placeholder='Buscar' />
                    <i className='fas fa-search botonGenerico iconoBusqueda'></i>
                </div>
            </li>
            



        </ul><section>
                    <h1>Elige y disfruta</h1>
                    <ul className='breedCardContainer'>

                        <CardMenu nombre='Hamburguesa' imagen={hamburguesa} />
                        <CardMenu nombre='pizza' imagen={pizza} />
                        <CardMenu nombre='burro' imagen={burro} />
                        <CardMenu nombre='sandwich' imagen={sandwich} />
                        <CardMenu nombre='nuggets' imagen={nuggets} />
                        <CardMenu nombre='pinchos' imagen={pinchos} />
                        <CardMenu nombre='empanada' imagen={empanada} />
                        <CardMenu nombre='tacos' imagen={tacos} />
                        <CardMenu nombre='salchipapa' imagen={salchipapa} />

                    </ul>
                </section></></>
    )
};



export default index;

