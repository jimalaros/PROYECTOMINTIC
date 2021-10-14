import React from 'react'
import CardCompra from 'components/CardCompra';
import pizza from '../media/pizza.png';
import hamburguesa from '../media/hamburguesa.png'

const Compra = () => {
    return (
        <div>
            <div>
                <CardCompra nombre='Pizza mediana' imagen={pizza} precio='$25.000' cantidad='1' sabor1='Pollo' sabor2='Hawaiana'/>
                <CardCompra nombre='Hamburguesa doble' imagen={hamburguesa} precio='$12.000' cantidad='1' sabor1='Pollo' sabor2='Res' />
            </div>
            <div className='p-3'>
                <div >
                    <label className='h5'>Sub total: </label>
                    <label className='h5'> 37.000</label>
                </div>
                <div> 
                    <label className='h5'>costo de envio: $5.000</label>
                </div>
                <div>
                    <label className='h5'>Total: </label>
                    <label className='h5'>42.000</label>
                </div>
            </div>
            <div className='p-3 text-center'>
                <button className='btn btn-dark'> pagar</button>
            </div>
        </div>
    )
}

export default Compra;