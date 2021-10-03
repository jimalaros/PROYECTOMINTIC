import logo from 'media/logo.png';

const Navbar = () => {
  return (
    <header>
      
      <div>
     <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
      <img src={logo} alt='imagen' className='logo' />
     
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="Index">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="Index">Menu</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="Login">Iniciar sesión</a>
            </li>
          </ul>
        </div>
      </div>
     </nav>
    </div>
    

    </header>
  );
};


export default Navbar;
