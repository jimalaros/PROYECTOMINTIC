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

                        <CardMenu nombre='Hamburguesa doble' imagen={hamburguesa} />
                        <CardMenu nombre='Pizza mediana' imagen={pizza} />
                        <CardMenu nombre='Burro especial' imagen={burro} />
                        <CardMenu nombre='Sandwich mixto' imagen={sandwich} />
                        <CardMenu nombre='Nuggets combo' imagen={nuggets} />
                        <CardMenu nombre='Pinchos combo' imagen={pinchos} />
                        <CardMenu nombre='Empanada combo' imagen={empanada} />
                        <CardMenu nombre='Tacos x5' imagen={tacos} />
                        <CardMenu nombre='Salchipapas' imagen={salchipapa} />

                    </ul>
                </section></></>
    )
};



export default index;

