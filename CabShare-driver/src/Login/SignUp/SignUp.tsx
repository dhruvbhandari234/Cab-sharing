import { useState } from "react";
import styles from "./SignUp.module.css";
import { axiosApi, router } from "../../main";

export const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    phoneNo: "",
    password: "",
    email: "",
    licensePlate: "",
  });

  const [pas, setPas] = useState("");

  const handleData = (e: any) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  const signUp = async (e: any) => {
    e.preventDefault();
    if (data.password != pas) {
      alert("Passwords dont match");
      return;
    }
    if (
      data.name == "" ||
      data.email == "" ||
      data.phoneNo == "" ||
      data.password == "" ||
      data.licensePlate == ""
    ) {
      alert("Cannot leave empty field");
      return;
    }
    try {
      const response = await axiosApi.post("/api/signup/drivers", data);
      alert("Created account");
      router.navigate("/");
    } catch (e: any) {
      alert("Error");
      console.log(e);
      if (e.response.status == 400) alert("Phone no already exists");
    }
  };

  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.h1}>Register</h1>
      <div className={styles.inputDiv}>
        <input
          type="text"
          name="name"
          className={styles.input}
          placeholder="Name"
          onChange={(e) => handleData(e)}
        />
        <input
          type="text"
          name="phoneNo"
          className={styles.input}
          placeholder="Phone No"
          onChange={(e) => handleData(e)}
        />
        <input
          type="text"
          name="licensePlate"
          className={styles.input}
          placeholder="License Plate"
          onChange={(e) => handleData(e)}
        />
        <input
          type="password"
          name="password"
          className={styles.input}
          placeholder="Password"
          onChange={(e) => handleData(e)}
        />
        <input
          type="password"
          name="password2"
          className={styles.input}
          placeholder="Re enter password"
          onChange={(e) => setPas(e.target.value)}
        />
        <input
          type="text"
          name="email"
          className={styles.input}
          placeholder="email"
          onChange={(e) => handleData(e)}
        />
        <button className={styles.create} onClick={signUp}>
          SignUp
        </button>
      </div>
    </div>
  );
};
