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
import fondomenu from 'media/fondomenu.png';
import titulomenu from 'media/titulomenu.png';
import botoncompra from 'media/botoncompra.png';
import botonregistro from 'media/botonregistro.png';
import { Link } from 'react-router-dom';





const index = () => {
    return (
        <><div className= 'Slidehome'>
            <img src={Slidehome} alt='imagen'  className='Slidehome'  />
        </div><>
        

        <ul className='header1'>
            

          
        </ul><section className='containerStyle'>
        
        <img className='estilotitulo' src={titulomenu} alt="titulomenu" />

            <div class= "menuContainerbg" style={{
                backgroundImage:`url(${fondomenu})`,
                backgroundSize:'cover'

            }} >

            
                    <ul className='breedCardContainer breedTitle'>

                        <CardMenu nombre='Hamburguesa doble' imagen={hamburguesa} precio='$12.000'/>
                        <CardMenu nombre='Pizza mediana' imagen={pizza} precio='$25.000'/>
                        <CardMenu nombre='Burro especial' imagen={burro} precio='$10.500'/>
                        <CardMenu nombre='Sandwich mixto' imagen={sandwich} precio='$11.000'/>
                        <CardMenu nombre='Nuggets combo' imagen={nuggets} precio='$16.500'/>
                        <CardMenu nombre='Pinchos combo' imagen={pinchos} precio='$15.000'/>
                        <CardMenu nombre='Empanada combo' imagen={empanada} precio='$12.000'/>
                        <CardMenu nombre='Tacos x5' imagen={tacos} precio='$18.000'/>
                        <CardMenu nombre='Salchipapas' imagen={salchipapa} precio='$11.000'/>

                    </ul>

                    <div className='botonregistrohome login p-5' > 
                    <div className='d-flex justify-content-between'>
                        
                        <h2 className='fw-bold text-center flex me-5'>¿AÚN NO TIENES CUENTA? </h2>   <Link to='Registro'><img src={botonregistro} alt="botonregistro"></img></Link> 
                    </div>
                    
                    </div>
            </div>
                </section></></>
    )
};



export default index;

