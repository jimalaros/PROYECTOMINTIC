import { Link } from 'react-router-dom';


function CardMenu({ nombre, imagen, precio }) {
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
     
     

    </li>
  );
}

export default CardMenu;
