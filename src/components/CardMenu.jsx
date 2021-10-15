import { Link } from 'react-router-dom';
import carritoicon from '../media/carritoicon.png';



function CardMenu({ nombre, imagen, precio, botoncompra }) {
  return (
    <li className='breedCard'>
      <Link to='/rhodesian'>
        <div className='contenedorImagen'>
          <img src={imagen} alt={nombre} />
         </div>
         </Link> 
        <div>
        <span className='breedTitle'>{nombre}</span>
           <h3>  {precio} </h3>
        </div>

        <li>
          <a href="/Login">< button className='secondaryButton'> Comprar <img className='carritoicon' src={carritoicon} alt='Comprar'/> </button></a>
        </li>

    </li>
  );
}

export default CardMenu;
