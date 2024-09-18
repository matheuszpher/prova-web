import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./crud.css";
import { useEffect, useState } from "react";
import axios from "axios";

// Componente funcional para ler e exibir a lista de alunos
const ReadAlunos = () => {
  // Estado para armazenar os dados dos alunos
  // Estado para armazenar a média do IRA
  // Estado para controlar a coloração das linhas
  const [alunos, setAlunos] = useState([]);
  const [mediaAlunos, setMediaAlunos] = useState(0);
  const [colorir, setColorir] = useState(false);

  // Função  para deletar um aluno e atualizar a lista
  const handleDelete = async (id) => {
    // Deleta o aluno com o ID fornecido
    // Obtém a lista atualizada de alunos
    // Atualiza o estado com a nova lista de alunos
    // Recalcula a média do IRA
    await axios.delete("http://localhost:3001/aluno/" + id);
    const response = await axios.get("http://localhost:3001/aluno");
    setAlunos(response.data);
    calcularMedia(response.data);
  };

  // Função para calcular a média do IRA
  const calcularMedia = (alunosData) => {
    const media =
      // Soma os IRAs e divide pelo número de alunos
      // Atualiza o estado da média
      alunosData.reduce((acc, aluno) => acc + aluno.IRA, 0) / alunosData.length;
    setMediaAlunos(media);
  };

  // useEffect para buscar a lista de alunos ao carregar o componente
  useEffect(() => {
    axios.get("http://localhost:3001/aluno").then((response) => {
      setAlunos(response.data);
      calcularMedia(response.data); // Calcula a média de IRA dos alunos
    });
  }, []);

  // Função que alterna a coloração das linhas
  const toggleColorir = () => {
    // Alterna o estado entre true e false
    setColorir(!colorir);
  };

  // Gera a lista de alunos para ser exibida na tabela
  const listAlunos = alunos.map((aluno) => (
    <tr
      key={aluno.id}
      className={
        colorir
          ? aluno.IRA >= 7
            ? "table-primary" // Azul para alunos com IRA acima de 7
            : "table-danger" // Vermelho para alunos com IRA abaixo de 7
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
          // Deleta o aluno quando o botão é clicado
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
        {/* Tabela para exibir os alunos */}
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
          {/* Exibe a média do IRA no rodapé da tabela */}
          <tfoot>
            <tr>
              <td colSpan="5" className="text-center">
                <span style={{ color: "blue", fontWeight: "bold" }}>
                  Média de IRA: {mediaAlunos ? mediaAlunos.toFixed(2) : "0.00"}
                  {/* Formata a média com 2 casas decimais */}
                </span>
              </td>
            </tr>
          </tfoot>
        </table>
        {/* Botão para alternar a coloração das linhas */}
        <button className="btn btn-secondary mb-3" onClick={toggleColorir}>
          {colorir ? "Remover Cores" : "Colorir Linhas"}
        </button>
      </div>
    </>
  );
};

export default ReadAlunos;
