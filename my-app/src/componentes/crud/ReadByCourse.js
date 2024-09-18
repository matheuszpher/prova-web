import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./crud.css"; // Aqui você pode adicionar classes customizadas
import { useEffect, useState } from "react";
import axios from "axios";

const ReadAlunosByCourse = () => {
  const [alunos, setAlunos] = useState([]);

  const cursos = [
    "Redes de computadores",
    "Sistemas de informação",
    "Engenharia de Software",
    "Engenharia da computação",
    "Design Digital",
    "Ciencia da computação",
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
          className={aluno.IRA >= 7 ? "table-success" : "table-danger"} // Aplica verde ou vermelho
        >
          <td>{aluno.nome}</td>
          <td>{aluno.IRA}</td>
          <td>
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
                <th scope="col">IRA</th>
                <th scope="col">Ações</th>
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
