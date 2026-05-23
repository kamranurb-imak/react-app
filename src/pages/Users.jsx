import { useEffect, useState } from "react";
import { getUsersDummy } from "../services/userService";
import "./Users.css";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const data = await getUsersDummy();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="users-page">
      <h1>Users</h1>
      <div className="users-table-card">
        {users.length === 0 ? (
          <div className="users-empty">Loading users...</div>
        ) : (
          <table className="users-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Users;