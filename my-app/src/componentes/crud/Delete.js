import { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./crud.css";
import { useNavigate } from "react-router-dom";

// Componente funcional para deletar um aluno
const DeleteAluno = () => {
  // Hook para navegação
  // Estado para armazenar o ID do aluno a ser deletado
  const navigate = useNavigate();
  const [id, setId] = useState();

  // Função chamada ao enviar o formulário para deletar um aluno
  const HandleDeleteButton = async (event) => {
    // Previne o comportamento padrão do submit
    event.preventDefault();
    // Requisição de DELETE para a API
    await axios.delete("http://localhost:3001/aluno/" + id);
    // Navega para a página de listagem de alunos
    navigate("/aluno/read");
  };

  return (
    <div>
      <h1>Deletar aluno</h1>
      <form onSubmit={HandleDeleteButton}>
        {/* Campo de entrada para o ID do aluno */}
        <div className="mb-3">
          <label className="form-label" htmlFor="inputId">
            Id:
          </label>
          <input
            // Atualiza o estado com o ID inserido
            onChange={(event) => setId(event.target.value)}
            className="form-control"
            type="text"
            name="nome"
            placeholder="id do aluno"
            id="inputId"
          />
        </div>

        {/* Botão para submeter o formulário e deletar o aluno */}
        <div className="buttonSubmit">
          <button
            onClick={HandleDeleteButton}
            className="btn btn-primary"
            type="submit"
          >
            Deletar
          </button>
        </div>
      </form>
    </div>
  );
};

export default DeleteAluno;
