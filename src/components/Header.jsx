import logo from 'media/Slidehome.png';

const Header = () => {
  return (
    <header>
      <ul className='header1'>
        <li>
          <img src={logo} alt='imagen' className='logo' width="50%\9"/>
        </li>
        <li>
          <button className='botonGenerico mainButton'>Nuevo post</button>
        </li>
        <li>
          <div className='buscar'>
            <input placeholder='Buscar una raza' />
            <i className='fas fa-search botonGenerico iconoBusqueda'></i>
          </div>
        </li>
        <li>
          <button className='botonGenerico secondaryButton'>Login</button>
        </li>
        <li>
          <button className='botonGenerico mainButton'>Registro</button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
