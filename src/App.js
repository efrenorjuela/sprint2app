import './App.css';

import { Link} from "react-router-dom";

function App() {
  return (

    <div id="wrapper">
      {/* <!-- Page Wrapper --> */}

        {/* <!-- Sidebar --> */}
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            {/* <!-- Sidebar - Brand --> */}

            <Link to="/index" className="sidebar-brand d-flex align-items-center justify-content-center">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">Plataforma</div> 
            </Link>


            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0"/>

            {/* <!-- Nav Item - Dashboard --> */}
            <li className="nav-item active">
                <Link to="/index" className="nav-link">
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>MENÚ</span>
                </Link>
            </li>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider"/>

            {/* <!-- Heading --> */}
            <div className="sidebar-heading">
                PÁGINAS
            </div>

            {/* <!-- Nav Item - Pages Collapse Menu --> */}
            <li className="nav-item active">
            <a className="nav-link collapsed" href="register.html">
            <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
            <span>Registro Usuarios</span></a>
            </li>
            <li className="nav-item active">
            <a className="nav-link collapsed" href="login.html">
            <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
            <span>LOGIN</span></a>
            </li>
            <li className="nav-item active">
            <a className="nav-link collapsed" href="crear.html">
            <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
            <span>Crear Orden</span></a>
            </li>
            <li className="nav-item active">
            <a className="nav-link collapsed" href="actualizar.html">
            <i className="fas fa-fw fa-cog"></i>
            <span>Actualizar Orden</span></a>
            </li>
            <li className="nav-item active">
            <a className="nav-link collapsed" href="listado.html">
            <i className="fas fa-fw fa-table"></i>
            <span>Listado Orden</span></a>
            </li>
            {/* <!-- Nav Item - Pages Collapse Menu --> */}


            {/* <!-- Divider --> */}
            <hr className="sidebar-divider d-none d-md-block"/>
        </ul>
        {/* <!-- End of Sidebar --> */}
        {/* <!-- Page Heading --> */}
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">PLATAFORMA RECOGIDA DE PAQUETES</h6>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: "25rem"}}
                        src="img/undraw_posting_photo.svg" alt="..."/>
                        </div>
                        <p>Pertenece a la empresa InstaYA. Es un sistema por medio del cual los usuarios programan la recogida de paquetes para su futuro envío</p>
                        </div>
                        </div>
    </div>

  );
}

export default App;
