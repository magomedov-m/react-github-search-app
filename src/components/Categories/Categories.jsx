import React, { useState, useEffect } from "react";
import CategotyCard from "../CategoryCard/CategoryCard";
import Info from "../Info/Info";
import { useSelector } from "react-redux";

export default function Categories() {
  const [arr, setArr] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const name = useSelector((state) => state.nameProfile.value);
  console.log("name:", name);

  useEffect(() => {
    if (name) {
      setLoading(true);
      setError(null); // Сбрасываем ошибку перед новым запросом
      fetch(`https://api.github.com/users/${name}/repos`)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          return res.json();
        })
        .then((result) => {
          if (Array.isArray(result)) {
            setArr(result);
          } else {
            setArr([]); // Если не массив, устанавливаем пустой массив
          }
        })
        .catch((error) => {
          console.error('Fetch error:', error);
          setError('Не удалось загрузить репозитории.'); // Устанавливаем сообщение об ошибке
          setArr([]); // Устанавливаем пустой массив при ошибке
        })
        .finally(() => {
          setLoading(false); // Устанавливаем состояние загрузки в false
        });
    } else {
      setArr([]); // Если name пустой, устанавливаем пустой массив
    }
  }, [name]);

  console.log("arr:", arr);
  return (
    <div>
      {name === '' ? null : <Info />}
      {name === '' ? (
        <div className="preview">Добро пожаловать</div>
      ) : (
        loading ? (
          <div>Загрузка...</div> // Сообщение о загрузке
        ) : error ? (
          <div>{error}</div> // Сообщение об ошибке
        ) : (
          Array.isArray(arr) && arr.length > 0 ? arr.map((el) => <CategotyCard key={el.id} props={el} />) : <div>Нет репозиториев</div>
        )
      )}
    </div>
  );
}