import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const validateForm = () => {
    return (
      errors.fullName === "" &&
      errors.email === "" &&
      errors.password === "" &&
      formData.fullName !== "" &&
      formData.email !== "" &&
      formData.password !== ""
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newErrors = { ...errors };

    switch (name) {
      case "fullName":
        newErrors.fullName =
          value.length < 5 ? "Full Name must be 5 characters long!" : "";
        break;
      case "email":
        const validEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        newErrors.email = validEmailRegex.test(value)
          ? ""
          : "Email is not valid!";
        break;
      case "password":
        newErrors.password =
          value.length < 8 ? "Password must be 8 characters long!" : "";
        break;
      default:
        break;
    }

    setFormData({ ...formData, [name]: value });
    setErrors(newErrors);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      alert("Valid Form");
    } else {
      if (errors.fullName !== "") alert(errors.fullName);
      if (errors.email !== "") alert(errors.email);
      if (errors.password !== "") alert(errors.password);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ color: "red" }}>Register Here!!!</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;
