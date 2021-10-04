import { Link } from 'react-router-dom';


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
          <button className='secondaryButton'> <img src={botoncompra} alt='Comprar'/> </button>
        </li>

    </li>
  );
}

export default CardMenu;
