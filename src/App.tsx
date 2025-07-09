import Agenda from "./pages/agenda";
import CantataNatal from "./pages/cantata-natal";
import Home from "./pages/home";
import MetodosEstudos from "./pages/metodos-estudos";
import Orquestra from "./pages/orquestra";
import PartituraCantata from "./pages/partitura-cantata";
import Videos from "./pages/videos";
import { createBrowserRouter, RouterProvider } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cantatanatal",
    element: <CantataNatal />,
  },
  {
    path: "/orquestra",
    element: <Orquestra />,
  },
  {
    path: "/download-partitura-cantata",
    element: <PartituraCantata />,
  },
  {
    path: "/videos",
    element: <Videos />,
  },
  {
    path: "/agenda",
    element: <Agenda />,
  },
  {
    path: "/metodosestudos",
    element: <MetodosEstudos />,
  },
  {
    path: "*",
    element: <h2>Página não encontrada.</h2>,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
