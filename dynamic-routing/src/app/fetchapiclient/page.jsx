"use client"
import { useEffect, useState } from "react";


const Fetch = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getuserdata() {
      const usersdata = await fetch("https://jsonplaceholder.typicode.com/users");
      setData(await usersdata.json());
    }
    getuserdata();
  }, []);

  return (
    <>
      <h1 className="bg-red-500">Fetch API through client side</h1>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>user name</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              
              <td>{`${user.address.street}, ${user.address.city}, ${user.address.zipcode}`}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <button className="bg-green-300 ring-1 ring-black">delete</button>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Fetch;
