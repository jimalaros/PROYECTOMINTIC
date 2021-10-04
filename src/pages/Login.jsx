import React from 'react'
import fondo from 'media/logo.png'
import google from 'media/google.png'
import 'styles/Login.css'

const Login = () => {
    return (
        <div className='login p-5'>
            <div>
                <div className='container w-25 shadow p-5'>
                    <div className=''>
                        <h2 className='fw-bold text-center '>login</h2>
                    </div>            
                    <div>
                        <form action="#">
                            <div className='mb-4'>
                                <input type="text" className='form-control' placeholder='Usuario' required/>
                            </div>
                            <div className='mb-4'>
                                <input type="password" className='form-control' placeholder='Password' required/>
                            </div >
                            <div className='d-grid mb-4'>
                                <input type="button" className='btn btn-primary' Value='Iniciar Sesion'/>
                            </div>
                        </form>
                        <div>
                                <button className='btn btn-outline-danger w-100 my-1'>
                                    <div className='row align-items-center'>
                                        <div className='col-2'>
                                            <img src={google} alt="" width='32'/>
                                        </div>
                                        <div className='col-10 text-right'>
                                            Google
                                        </div>
                                    </div>
                                </button>
                            </div>
                            <div className="my-3 ">
                                <span >No tienes cuenta? <a href="Registro" className='text-secondary'>Registrate</a></span>
                            </div>
                    </div>
                </div>
                <div className='text-end'>
                    <img className='' src={fondo} alt="fondo" width='20%' />
                </div>
            </div>
        </div>
    )
};

export default Login;
