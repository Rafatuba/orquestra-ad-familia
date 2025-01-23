import CantataPascoa from "./pages/cantata-pascoa";
import Home from "./pages/home";
import { createBrowserRouter, RouterProvider } from "react-router";

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
    path: "*",
    element: <h2>Página não encontrada.</h2>,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
