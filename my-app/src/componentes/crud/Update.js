import { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./crud.css";
import { useNavigate } from "react-router-dom";

const UpdateAluno = () => {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [nome, setNome] = useState("");
  const [curso, setCurso] = useState("");
  const [IRA, setIRA] = useState("");

  const HandleUpdateButton = async (event) => {
    event.preventDefault();
    await axios.put("http://localhost:3001/aluno", {
      id: Number(id),
      nome,
      curso,
      IRA: Number(IRA),
    });
    navigate("/aluno/read");
  };

  return (
    <div>
      <h1>Atualizar aluno</h1>
      <form onSubmit={HandleUpdateButton}>
        <div className="mb-3">
          <label className="form-label" htmlFor="inputId">
            Id:
          </label>
          <input
            onChange={(event) => setId(event.target.value)}
            className="form-control"
            type="text"
            name="nome"
            placeholder="id do aluno"
            id="inputId"
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="inputNome">
            Nome:
          </label>
          <input
            onChange={(event) => setNome(event.target.value)}
            className="form-control"
            type="text"
            name="nome"
            placeholder="nome do aluno"
            id="inputNome"
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="inputCurso">
            Curso:
          </label>
          <input
            onChange={(event) => setCurso(event.target.value)}
            className="form-control"
            type="text"
            name="curso"
            placeholder="curso"
            id="inputCurso"
          />
        </div>
        <label className="form-label" htmlFor="selectIRA">
          IRA:
        </label>
        <div>
          <input
            className="form-select"
            id="selectIRA"
            placeholder="IRA do aluno"
            onChange={(event) => {
              setIRA(event.target.value);
            }}
          ></input>
        </div>
        <div className="buttonSubmit">
          <button
            onClick={HandleUpdateButton}
            className="btn btn-primary"
            type="submit"
          >
            Atualizar
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateAluno;
