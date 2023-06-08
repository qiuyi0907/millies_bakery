import "./login-form.styles.scss";
import { useState } from "react";
import FormInput from "../form-input/FormInput";

import {
  signinWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase-utils";
import Button from "../button/Button";

const defaultLoginInformation = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const [loginInformation, setLoginInformation] = useState(
    defaultLoginInformation
  );
  const { email, password } = loginInformation;

  const resetLoginInformation = () => {
    setLoginInformation(defaultLoginInformation);
  };

  const signInWithGoogle = async () => {
    await signinWithGooglePopup();
    
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // const response = await signInAuthUserWithEmailAndPassword(
      //   email,
      //   password
      // );
      await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      resetLoginInformation();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setLoginInformation({ ...loginInformation, [name]: value });
  };

  return (
    <div className="log-in-container">
      <h4>Already have an account?</h4>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          inputOptions={{
            type: "email",
            required: true,
            onChange: handleChange,
            name: "email",
            value: email,
          }}
        />

        <FormInput
          label="Password"
          inputOptions={{
            type: "password",
            required: true,
            onChange: handleChange,
            name: "password",
            value: password,
          }}
        />
        <div className="buttons-container">
          <Button content="Sign In" type="submit" />
          <Button
            content="Sign in with Google"
            onClick={signInWithGoogle}
            type="button"
          />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
