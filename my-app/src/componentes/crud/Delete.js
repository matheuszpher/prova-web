import { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./crud.css";

const DeleteAluno = () => {
  const [id, setId] = useState()
  const HandleDeleteButton = async () => {
    await axios.delete("http://localhost:3001/aluno" + id);
  };


  return (
    <div>
      <h1>Criar aluno</h1>
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
            Criar
          </button>
        </div>
      </form>
    </div>
  );
};

export default DeleteAluno;
