/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// import Footer from 'components/Footer';

const Ordenes = () => {
return (
        <div class="container">
        <div class="d-flex align-items-center bd-highlight">
            <div class="p-2 flex-grow-1 bd-highlight">
            </div>
            <div class="p-3 bd-highlight "><a className="text-decoration-none text-danger" href="#"><b>Admin</b></a></div>
        </div>
        <div className="title mb-5 text-center">
            <h2><b>Estado De Pedido</b></h2>
        </div>
        <div class="row d-flex justify-content-center">
            <div class="col-6 border">
            <div className="bg-light border rounded lh-1  mt-2 ps-2 pt-2">
        <p><b>(Cod. 002)</b> - Pizza mediana - Hawaiana</p>
        <p>Cantidad: 1 </p>
        </div>
        <div className="ms-2 pt-2">
        <p>Fecha - Hora</p>
        </div>
        <div className="lh-1 mt-1 ps-2 pt-2 border-top">
            <h6><b>Informaciòn cliente</b></h6>
            <p>Nombre</p>
            <p>Direccion</p>
            <p>Telefono</p>
        </div>
        </div>
        <div class="col-2 pt-2 ">
        <div class="d-grid gap-2">
        <button type="button" class="btn btn-outline-secondary btn-sm">
        <i class="fas fa-check-circle text-success"></i> Finalizado</button>
        <button type="button" class="btn btn-outline-secondary btn-sm">
        <i class="fas fa-check-circle text-warning"></i> Despachado</button>
        <button type="button" class="btn btn-outline-secondary btn-sm">
        <i class="fas fa-check-circle text-danger"></i> Cancelado</button>

    </div>
    </div>
    </div>
    <br/>
    </div>
);
};

export default Ordenes;