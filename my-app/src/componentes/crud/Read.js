import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./crud.css";
import { useEffect, useState } from "react";
import axios from "axios";

const ReadAlunos = () => {
  const [alunos, setAlunos] = useState([]);
  const [mediaAlunos, setMediaAlunos] = useState(0);
  const [colorir, setColorir] = useState(false); // Estado para controlar se as linhas estão coloridas

  const handleDelete = async (id) => {
    await axios.delete("http://localhost:3001/aluno/" + id);
    const response = await axios.get("http://localhost:3001/aluno");
    setAlunos(response.data);
    calcularMedia(response.data);
  };

  const calcularMedia = (alunosData) => {
    const media =
      alunosData.reduce((acc, aluno) => acc + aluno.IRA, 0) / alunosData.length;
    setMediaAlunos(media);
  };

  useEffect(() => {
    axios.get("http://localhost:3001/aluno").then((response) => {
      setAlunos(response.data);
      calcularMedia(response.data);
    });
  }, []);

  // Função que alterna o estado de colorir
  const toggleColorir = () => {
    setColorir(!colorir);
  };

  const listAlunos = alunos.map((aluno) => (
    <tr
      key={aluno.id}
      className={
        colorir
          ? aluno.IRA >= 7
            ? "table-primary" // Azul para alunos acima da média
            : "table-danger" // Vermelho para alunos abaixo da média
          : ""
      }
    >
      <td>{aluno.id}</td>
      <td>{aluno.nome}</td>
      <td>{aluno.curso}</td>
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
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>{listAlunos}</tbody>
          <tfoot>
            <tr>
              <td colSpan="5" className="text-center">
                <span style={{ color: "blue", fontWeight: "bold" }}>
                  Média de IRA: {mediaAlunos.toFixed(2)}
                </span>
              </td>
            </tr>
          </tfoot>
        </table>
        <button className="btn btn-secondary mb-3" onClick={toggleColorir}>
          {colorir ? "Remover Cores" : "Colorir Linhas"}
        </button>
      </div>
    </>
  );
};

export default ReadAlunos;
