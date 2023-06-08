import { useState } from "react";
import FormInput from "../form-input/FormInput";
import {
  CreateUserFromAuth,
  createAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase-utils";

import './signup-form.styles.scss'
import Button from "../button/Button";

const defaultUserInformation = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
  petName: "",
  petAge: "",
  petGender: "",
  petBreed: "",
};

const SignUpForm = () => {
  const [userInformstion, setUserInformation] = useState(
    defaultUserInformation
  );
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    password,
    confirmPassword,
    petName,
    petAge,
    petGender,
    petBreed,
  } = userInformstion;

  const resetUserInformation = () => {
    setUserInformation(defaultUserInformation);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      const response = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await CreateUserFromAuth(response.user, {
        firstName,
        lastName,
        phoneNumber,
        petAge,
        petName,
        petGender,
        petBreed
      });
      resetUserInformation();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserInformation({ ...userInformstion, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h4>Don't have an account?</h4>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <h5>Your Basic Infomration</h5>
        <div className="basic-information signup-input-container">
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
        </div>

        <h5>Set Password</h5>
        <div className="password-input-container signup-input-container">
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
        </div>

        <h5>Your Pet's Information</h5>
        <div className="pets-information signup-input-container">
          <FormInput
            label="Name"
            inputOptions={{
              type: "text",
              required: true,
              onChange: handleChange,
              name: "petName",
              value: petName,
            }}
          />

          <FormInput
            label="Age"
            inputOptions={{
              type: "number",
              required: true,
              onChange: handleChange,
              name: "petAge",
              value: petAge,
            }}
          />

          <FormInput
            label="Gender"
            inputOptions={{
              type: "text",
              required: true,
              onChange: handleChange,
              name: "petGender",
              value: petGender,
            }}
          />

          <FormInput
            label="Breed"
            inputOptions={{
              type: "text",
              required: true,
              onChange: handleChange,
              name: "petBreed",
              value: petBreed,
            }}
          />
        </div>

        <Button content={'Sign Up'} type="submit"/>
      </form>
    </div>
  );
};

export default SignUpForm;
