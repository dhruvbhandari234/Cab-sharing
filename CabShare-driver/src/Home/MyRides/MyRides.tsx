import styles from "./MyRides.module.css";
import { Rides } from "./Rides";

import plus from "../../Assets/plus.png";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { axiosApi } from "../../main";

export const MyRides = () => {
  const [data, setData] = useState([]);

  const func = (rideId: any) => {
    console.log(rideId);
  };

  useEffect(() => {
    const id = sessionStorage.getItem("driver");
    console.log(id);
    const fetchData = async () => {
      try {
        const { data: response } = await axiosApi.get(
          `/api/driver/ride/myrides/${id}`
        );
        setData(response);
        console.log(response);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.mainContainer}>
      <p className={styles.header}>My Rides</p>
      {data.map((item: any) => (
        <Rides rideId={item} func={func} />
      ))}
    </div>
  );
};
