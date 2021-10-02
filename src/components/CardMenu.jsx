import { Link } from 'react-router-dom';
import hamburguesa from 'media/hamburguesa.png';
import pizza from 'media/pizza.png';

function CardMenu({ nombre, imagen }) {
  return (
    <li className='breedCard'>
      <Link to='/rhodesian'>
        <div className='contenedorImagen'>
          <img src={hamburguesa} alt={hamburguesa} />
          <img src={pizza} alt={pizza} />
        </div>
      </Link>
      <span className='breedTitle'>{nombre}</span>
    </li>
  );
}

export default CardMenu;
