import CantataPascoa from "./pages/cantata-pascoa";
import Home from "./pages/home";
import { createBrowserRouter, RouterProvider } from "react-router";
import Orquestra from "./pages/orquestra";

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
    path: "*",
    element: <h2>Página não encontrada.</h2>,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
