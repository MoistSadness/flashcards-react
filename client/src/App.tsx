import {
  RouterProvider,
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ErrorPage from "./components/ErrorPage";
import Auth from "./pages/Auth";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />} errorElement={<ErrorPage />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Auth auth="login" />} />
      <Route path="register" element={<Auth auth="register" />} />
      <Route path="/user/:user"></Route>
    </Route>
  )
);

export default function App() {
  {
    /** Default Layout and styles*/
  }
  return (
    <div className="bg-bgPrimary w-screen h-screen text-textPrimary flex flex-col">
      
        <RouterProvider router={router} />
    </div>
  );
}
