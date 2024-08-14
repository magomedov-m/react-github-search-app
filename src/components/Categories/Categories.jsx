import React, { useState } from "react";
import { useEffect } from "react";
import CategotyCard from "../CategoryCard/CategoryCard";
import Info from "../Info/Info";

export default function Categories() {
  const [arr, setArr] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/magomedov-m/repos")
      .then((res) => res.json())
      .then((result) => {
        setArr(result);
      });
  }, []);
  console.log(arr);
  return (
    <div>
        {/* {arr.length == 0 ? null : <Info />} */}
        {arr.length == 0 ? <div className="preview">Добро пожаловать</div> : arr.map(el => <CategotyCard props={el} />)}
    </div>
  );
}
