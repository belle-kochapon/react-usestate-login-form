import { ChangeEvent, useState } from "react";
import Button from "../components/Button";
import UserRegisterForm from "../components/UserRegisterForm";

// Create function separately in a component name "UserRegisterForm.tsx", then import it here
function Login() {
  return (
    <>
       <UserRegisterForm></UserRegisterForm> 
    </>
  );
}

export default Login;