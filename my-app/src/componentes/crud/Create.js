import { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./crud.css";
import { useNavigate } from "react-router-dom";

// Componente funcional para criar um novo aluno
const CreateAluno = () => {
  // Hook para navegação
  // Estado para armazenar o nome do alunp
  // Estado para armazenar o curso do aluno
  // Estado para armazenar o IRA do aluno
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [curso, setCurso] = useState("");
  const [IRA, setIRA] = useState("");

  // Função chamada ao enviar o formulário para criar um aluno
  const HandleCreateButton = async (event) => {
    // Previne o comportamento padrão do submit
    event.preventDefault();
    await axios.post("http://localhost:3001/aluno", {
      nome,
      curso,
      IRA: Number(IRA),
    });
    // Navega para a página de listagem de alunos após a criação
    navigate("/aluno/read");
  };

  return (
    <div>
      <h1>Criar aluno</h1>
      <form onSubmit={HandleCreateButton}>
        {/* Campo de entrada para o nome do aluno */}
        <div className="mb-3">
          <label className="form-label" htmlFor="inputNome">
            Nome:
          </label>
          <input
            // Atualiza o estado nome
            onChange={(event) => setNome(event.target.value)}
            className="form-control"
            type="text"
            name="nome"
            placeholder="nome do aluno"
            id="inputNome"
          />
        </div>

        {/* Campo de entrada para o curso do aluno */}
        <div className="mb-3">
          <label className="form-label" htmlFor="inputCurso">
            Curso:
          </label>
          <input
            // Atualiza o estado curso
            onChange={(event) => setCurso(event.target.value)}
            className="form-control"
            type="text"
            name="curso"
            placeholder="curso"
            id="inputCurso"
          />
        </div>

        {/* Campo de entrada para o IRA do aluno */}
        <label className="form-label" htmlFor="selectIRA">
          IRA:
        </label>
        <div>
          <input
            className="form-select"
            id="selectIRA"
            // Atualiza o estado IRA
            onChange={(event) => setIRA(event.target.value)}
          ></input>
        </div>

        {/* Botão para submeter o formulário */}
        <div className="buttonSubmit">
          <button
            onClick={HandleCreateButton}
            className="btn btn-primary"
            type="submit"
          >
            Criar
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateAluno;
