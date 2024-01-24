import { useState } from "react";
import { Link } from "react-router-dom";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

type AuthTypes = {
  auth: "login" | "register";
};
type ErrorType = {
  code: number;
  message: string;
};

export default function Auth({ auth }: AuthTypes) {
  const [error, setError] = useState<ErrorType>();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [viewPassword, setViewPassword] = useState<boolean>(false);

  function HandleLogin(e) {
    e.preventDefault();

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError({ code: errorCode, message: errorMessage });
        // ..
      });
  }

  function HandleRegister(e) {
    e.preventDefault();
  }

  return (
    <div className="flex justify-center mt-10">
      <div className="bg-bgSecondary justify-center items-center w-96 ">
        <div className="p-12">
          <form className="flex flex-col" onSubmit={auth==="login" ? HandleLogin : HandleRegister}>
            <h2 className="mb-4">
              {auth === "login" ? "Log into your account" : "Register with us"}
            </h2>
            <ul className="mb-6">
              <li className="flex flex-col mb-2">
                <label htmlFor="usernameInput">Username</label>
                <input
                  id="usernameInput"
                  className="bg-bgTertiary px-3 py-2"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </li>
              <li className="flex flex-col">
                <label htmlFor="passwordInput">Password</label>
                <div className="flex relative ">
                  <input
                    id="passwordInput"
                    className="bg-bgTertiary px-3 py-2 grow"
                    type={viewPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <div
                    className="absolute right-3 top-2"
                    onClick={() => setViewPassword((prevState) => !prevState)}
                  >
                    {viewPassword ? (
                      <VisibilityOffIcon fontSize="small" />
                    ) : (
                      <VisibilityIcon fontSize="small" />
                    )}
                  </div>
                </div>
              </li>
            </ul>
            <span className="flex justify-end mb-6">
              <button className="bg-colorPrimary py-2 px-3 flex-none">
                {auth === "login" ? "Login" : "Register"}
              </button>
            </span>
            <span className="flex justify-center text-textSecondary text-sm">
              {auth === "login" ? (
                <p>
                  Don't have an account?
                  <Link
                    className="font-bold ml-2 text-colorSecondary"
                    to="/register"
                  >
                    Register now
                  </Link>
                </p>
              ) : (
                <p>
                  Already have an account?
                  <Link
                    className="font-bold ml-2 text-colorSecondary"
                    to="/register"
                  >
                    Login now
                  </Link>
                </p>
              )}
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}
