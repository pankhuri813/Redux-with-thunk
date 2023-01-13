
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function List() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((resp) => {
      setData(resp.data);
    });
  }, []);

  return (
    <div className="center" >
      {data.map((e) => {
        return (
          <div  key={e.id}>
            <h2 >{e.name}</h2>
            <p>
              <i>{e.email}</i>
            </p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}