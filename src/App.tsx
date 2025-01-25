import CantataPascoa from "./pages/cantata-pascoa";
import Home from "./pages/home";
import { createBrowserRouter, RouterProvider } from "react-router";
import Orquestra from "./pages/orquestra";
import PartituraCantata from "./pages/partitura-cantata";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cantatapascoa",
    element: <CantataPascoa />,
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
    path: "*",
    element: <h2>Página não encontrada.</h2>,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
