import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link, Outlet } from "react-router-dom";

//Renderiza uma nav bar com DropDowns que redirecionam para paginas que executam um CRUD
//Ao final do componente é possivel encontrar um componente outlet, ele é responsavel por renderizar os componentes passados no ROUTE
const Home = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        style={{ margin: 0 }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="http://www.bootstrap.com">
            Sigaa
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  href="/"
                >
                  Aluno
                </a>
                <ul className="dropdown-menu">
                  <li className="dropdown-item">
                    <Link className="dropdown-item" to="aluno/create">
                      Gerar cadastro do aluno
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link className="dropdown-item" to="aluno/read">
                      Visualizar alunos
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link className="dropdown-item" to="aluno/update">
                      Atualizar cadastro do aluno
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link className="dropdown-item" to="aluno/delete">
                      Deletar aluno
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link className="dropdown-item" to="aluno/readByCourse">
                      Listar alunos por curso
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <img
          src="https://logodownload.org/wp-content/uploads/2014/10/ufc-logo-0.png"
          alt="Logo UFC"
          style={{ height: "40px", width: "80px", marginLeft: "15px" }}
        />
      </nav>
      <Outlet />
    </div>
  );
};

export default Home;
