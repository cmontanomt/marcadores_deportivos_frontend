import { Component } from "react";
import Menu from "./componentes/Menu";
import MenuInicial from "./componentes/MenuInicial";
import PageDeportes from "./componentes/PageDeportes";
import PageEquipos from "./componentes/PageEquipos";
import PageEventos from "./componentes/PageEventos";
import PageInicio from "./componentes/PageInicio";
import PageLogin from "./componentes/PageLogin";
import PageLogout from "./componentes/PageLogout";
import PageUsuarios from "./componentes/PageUsuarios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      /* <Router>
          <Menu />
          <Routes>
            <Route path="/" element={<PageInicio />} />
            <Route path="/PageInicio" element={<PageInicio />}/>
            <Route path="/PageDeportes" element={<PageDeportes />}/>
            <Route path="/PageEquipos" element={<PageEquipos />}/>
            <Route path="/PageEventos" element={<PageEventos />}/>
            <Route path="/PageSesion" element={<PageSesion />}/>
            <Route path="/PageUsuarios" element={<PageUsuarios />}/>
          </Routes>
        </Router> */

      <Router>
        <MenuInicial />
        <Routes>
          <Route path='/' element={<PageInicio />} />
          <Route path='/PageInicio' element={<PageInicio />} />
          <Route path='/PageLogin' element={<PageLogin />} />
          <Route path='/PageEventos' element={<PageEventos />} /> 
        </Routes>
      </Router>
    );
  }
}

export default App;
