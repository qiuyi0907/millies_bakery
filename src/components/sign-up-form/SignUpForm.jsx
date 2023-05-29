import React from "react";
import { useState } from "react";
import FormInput from "../form-input/FormInput";
import { CreateUserFromAuth, createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase-utils";

const defaultUserInformation = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [userInformstion, setUserInformation] = useState(
    defaultUserInformation
  );
  const { firstName, lastName, email, phoneNumber, password, confirmPassword } =
    userInformstion;

    console.log(userInformstion)

    const resetUserInformation = () => {
      setUserInformation(defaultUserInformation);
    };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('passwords do not match');
      return;
    }

    try {
      const response = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await CreateUserFromAuth(response.user, { firstName, lastName, phoneNumber });
      resetUserInformation();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use');
      } else {
        console.log('user creation encountered an error', error);
      }
    }
}

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserInformation({ ...userInformstion, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="First Name"
          inputOptions={{
            type: "text",
            required: true,
            onChange: handleChange,
            name: "firstName",
            value: firstName,
          }}
        />

        <FormInput
          label="Last Name"
          inputOptions={{
            type: "text",
            required: true,
            onChange: handleChange,
            name: "lastName",
            value: lastName,
          }}
        />

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
          label="Phone Number"
          inputOptions={{
            type: "text",
            required: true,
            onChange: handleChange,
            name: "phoneNumber",
            value: phoneNumber,
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

        <FormInput
          label="Confirm Password"
          inputOptions={{
            type: "password",
            required: true,
            onChange: handleChange,
            name: "confirmPassword",
            value: confirmPassword,
          }}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
