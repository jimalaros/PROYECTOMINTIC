import { Link } from 'react-router-dom';


function CardMenu({ nombre, imagen }) {
  return (
    <li className='breedCard'>
      <Link to='/rhodesian'>
        <div className='contenedorImagen'>
          <img src={imagen} alt={nombre} />
        </div>
      </Link>
      <span className='breedTitle'>{nombre}</span>
    </li>
  );
}

export default CardMenu;
