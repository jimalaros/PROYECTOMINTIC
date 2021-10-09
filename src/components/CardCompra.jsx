import { Link } from 'react-router-dom';
import basurero from '../media/delete.png';
import menos from '../media/quitar.png';
import mas from '../media/agregar.png'


function CardCompra({ nombre, imagen, precio, cantidad, sabor1, sabor2 }) {
    return (
        <div className='container p-3 shadow'>
            <Link to='/rhodesian'>
                <div className='contenedorImagen '>
                    <img src={imagen} alt={nombre} />
                </div>
            </Link> 
            <div className=''>
                <span className='breedTitle d-block'>{nombre}</span>
                <label className='breedTitle'> {precio}</label>
            </div>
            <div className='container btn-group d-flex justify-content-center'>
                <div>
                    <button className='btn btn-default'>
                        <img src={basurero} alt="borrar" width='15'/>
                    </button>
                </div>
                <div>
                    <button className='btn btn-default'>
                        <img src={menos} alt="menos" width='15'/>
                    </button>
                </div>
                <div className=' ' >
                    <label className='h5'>{cantidad}</label>
                </div>
                <div>
                    <button className='btn btn-default'>
                        <img src={mas} alt="mas" width='15'/>
                    </button>
                </div>
            </div>
            <div>
                <div>
                    <input type='radio' name={nombre}/>
                    <label className='p-2 h5'>{sabor1}</label>
                </div>
                <div>
                    <input type='radio' name={nombre}/>
                    <label className='p-2 h5'>{sabor2}</label>
                </div>
            </div>
        </div>
    );
}

export default CardCompra;
