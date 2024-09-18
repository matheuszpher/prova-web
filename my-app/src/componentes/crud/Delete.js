import { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./crud.css";
import { useNavigate } from "react-router-dom";

const DeleteAluno = () => {
  const navigate = useNavigate();

  const [id, setId] = useState();
  const HandleDeleteButton = async (event) => {
    event.preventDefault();
    await axios.delete("http://localhost:3001/aluno/" + id);
    navigate("/aluno/read");
  };

  return (
    <div>
      <h1>Deletar aluno</h1>
      <form onSubmit={HandleDeleteButton}>
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
