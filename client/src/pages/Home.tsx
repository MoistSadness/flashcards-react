import { useState } from "react";
import LandingPage from "../components/LandingPage";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);

  function ShowApp() {
    return (
    <div>
      <div>Check out our Flashcard sets</div>
      <div>Or create flash cards with us!</div>
      <div>Register now!</div>
      <div>Have an account?</div>
      <div>Login</div>
      </div>
    )
  }

  return (
    <div className="">
      {isLoggedIn ? ShowApp() : <LandingPage />}
    </div>
  );
}
