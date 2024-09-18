import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./crud.css";
import { useEffect, useState } from "react";
import axios from "axios";

const ReadAlunosByCourse = () => {
  const [alunos, setAlunos] = useState([]);

  const cursos = [
    "Redes de Computadores",
    "Sistemas de Informação",
    "Engenharia de Software",
    "Engenharia da Computação",
    "Design Digital",
    "Ciência da Computação",
  ];

  useEffect(() => {
    axios.get("http://localhost:3001/aluno").then((response) => {
      setAlunos(response.data);
    });
  }, []);

  const handleDelete = async (id) => {
    await axios.delete("http://localhost:3001/aluno/" + id);
    const response = await axios.get("http://localhost:3001/aluno");
    setAlunos(response.data);
  };

  const alunosPorCurso = (curso) => {
    return alunos
      .filter((aluno) => aluno.curso === curso)
      .map((aluno) => (
        <tr
          key={aluno.id}
          className={aluno.IRA >= 7 ? "table-success" : "table-danger"}
        >
          <td>{aluno.nome}</td>
          <td className="col-ira">{aluno.IRA}</td>
          <td className="col-acoes">
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(aluno.id)}
            >
              Excluir
            </button>
          </td>
        </tr>
      ));
  };

  return (
    <>
      <h1>Alunos por Curso</h1>
      {cursos.map((curso) => (
        <div key={curso}>
          <h2>{curso}</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Nome</th>
                <th scope="col" className="col-ira">
                  IRA
                </th>
                <th scope="col" className="col-acoes">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody>{alunosPorCurso(curso)}</tbody>
          </table>
        </div>
      ))}
    </>
  );
};

export default ReadAlunosByCourse;
