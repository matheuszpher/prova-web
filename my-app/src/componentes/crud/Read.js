import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./crud.css";
import { useEffect, useState } from "react";
import axios from "axios";

const ReadAlunos = () => {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/aluno").then((response) => {
      setAlunos(response.data);
    });
  }, []);

  const listAlunos = alunos.map((alunos) => (
    <tr>
      <td>{alunos.id}</td>
      <td>{alunos.nome}</td>
      <td>{alunos.curso}</td>
      <td>{alunos.IRA}</td>
      <div>
        <button className="btn btn-secondary">Editar</button>
        <button className="btn btn-danger">Excluir</button>
      </div>
    </tr>
  ));
  return (
    <>
      <h1>Lista de alunos</h1>
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nome</th>
              <th scope="col">Curso</th>
              <th scope="col">IRA</th>
            </tr>
          </thead>
          <tbody>{listAlunos}</tbody>
        </table>
      </div>
    </>
  );
};

export default ReadAlunos;