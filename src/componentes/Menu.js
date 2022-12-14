import React, { Component } from "react"
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/js/dist/collapse'
import 'bootstrap/js/dist/offcanvas'
import 'bootstrap/js/dist/dropdown'


class Menu extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="./logo.png" alt="" width="70" />
          </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ms-auto">
                <Link className="nav-link active" aria-current="page" to="/PageInicio">Inicio</Link>
                <Link className="nav-link" to="/PageLogin">Iniciar Sesión</Link>
                <Link className="nav-link" to="/PageUsuarios">Usuarios</Link>
                <Link className="nav-link" to="/PageEventos">Eventos</Link>
                <Link className="nav-link" to="/PageDeportes">Deportes</Link>
                <Link className="nav-link" to="/PageEquipos">Equipos</Link>

              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Menu;
