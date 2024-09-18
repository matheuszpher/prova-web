import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import Home from "./componentes/home-page";
import CreateAluno from "./componentes/crud/Create";
import ReadAlunos from "./componentes/crud/Read";
import UpdateAluno from "./componentes/crud/Update";
import DeleteAluno from "./componentes/crud/Delete";
import ReadAlunosByCourse from "./componentes/crud/ReadByCourse";

//Faz a gestão das rotas utilizando o React router dom

//Os components passados serão renderizados no componente Outlet da Home page

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      { path: "aluno/create", element: <CreateAluno /> },
      { path: "aluno/read", element: <ReadAlunos /> },
      { path: "aluno/update", element: <UpdateAluno /> },
      { path: "aluno/delete", element: <DeleteAluno /> },
      { path: "aluno/readByCourse", element: <ReadAlunosByCourse /> },
    ],
  },
]);

const Main = () => {
  return <RouterProvider router={router} />;
};

export default Main;
