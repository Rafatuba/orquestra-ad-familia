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
]);

export default function App() {
  return <RouterProvider router={router} />;
}
