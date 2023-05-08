import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [users, setUsers] = useState([]);

  const url = 'https://api.github.com';

  useEffect(() => {


    //Este metodo se ejecuta siempre por eso siempre carga los usuarios..solo deberia ser con /users
    const getUsers = async () => {

      const url = 'http://localhost:5000/users';
      const result = await axios.get(url);
      console.log("El resultado trae:" + result.data);

      setUsers(result.data);
    }
    getUsers();

//Funciona ! Le tiro la ruta en el buscador..y aqui hace la peticion al servidor de NodeJS.
    const metodoTestFront = async () => {

      const url = 'http://localhost:5000/prueba';
      const result = await axios.get(url);
      console.log("metodoTestFront");
      console.log(result);

    }
    metodoTestFront();
      
    //Prueba
    // async function fetchData() {
    //   const response = await axios.get('http://localhost:5000/users');    //siempre trae esta ruta.
    //   console.log("HOLAAA" );
    //   setUsers(response.data);
    // }
    // fetchData();


  }, []);

  return (
    <div>
      <h1>Usuarios Github</h1>
      <ul>
        {users.map((user) => (
          <li key={user.login}>User Id: {user.id} y Node Id: {user.node_id}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
