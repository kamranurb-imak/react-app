import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersDummy } from "../services/userService";
import { setUsers, addUser, updateUser, removeUser } from "../redux/slices/usersSlice";
import "./Users.css";

function Users() {
  const users = useSelector((state) => state.users.list);
  const dispatch = useDispatch();
  const [newName, setNewName] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingName, setEditingName] = useState("");
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded) {
      loadUsers();
    }
  }, [loaded, dispatch]);

  const loadUsers = async () => {
    try {
      const data = await getUsersDummy();
      dispatch(setUsers(data));
      setLoaded(true);
    } catch (err) {
      console.error(err);
      setError("Failed to load users.");
    }
  };

  const nextUserId = () => {
    if (users.length === 0) return 1;
    return Math.max(...users.map((user) => user.id)) + 1;
  };

  const handleAddUser = (event) => {
    event.preventDefault();
    const trimmedName = newName.trim();
    if (!trimmedName) {
      setError("Please enter a valid user name.");
      return;
    }

    dispatch(addUser({ id: nextUserId(), name: trimmedName }));
    setNewName("");
    setError("");
  };

  const startEdit = (user) => {
    setEditingId(user.id);
    setEditingName(user.name);
    setError("");
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditingName("");
    setError("");
  };

  const handleSave = (id) => {
    const trimmedName = editingName.trim();
    if (!trimmedName) {
      setError("Please enter a valid user name.");
      return;
    }

    dispatch(updateUser({ id, name: trimmedName }));
    cancelEdit();
  };

  const handleRemove = (id) => {
    dispatch(removeUser(id));
    if (editingId === id) {
      cancelEdit();
    }
  };

  return (
    <div className="users-page">
      <div className="users-topbar">
        <div>
          <h1>Users</h1>
          <p className="users-subtitle">
            Use Redux to load, add, update, and delete user records.
          </p>
        </div>

        <form className="users-form" onSubmit={handleAddUser}>
          <input
            className="users-input"
            type="text"
            value={newName}
            onChange={(event) => setNewName(event.target.value)}
            placeholder="Enter new user name"
          />
          <button type="submit" className="users-add-button">
            Add user
          </button>
        </form>
      </div>

      {error && <div className="users-error">{error}</div>}

      <div className="users-table-card">
        {!loaded ? (
          <div className="users-empty">Loading users...</div>
        ) : users.length === 0 ? (
          <div className="users-empty">No users found. Add a user to begin.</div>
        ) : (
          <table className="users-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th className="users-actions-header">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>
                    {editingId === user.id ? (
                      <input
                        className="users-table-input"
                        value={editingName}
                        onChange={(event) => setEditingName(event.target.value)}
                      />
                    ) : (
                      user.name
                    )}
                  </td>
                  <td className="users-actions-cell">
                    {editingId === user.id ? (
                      <>
                        <button
                          type="button"
                          className="users-action-button users-save-button"
                          onClick={() => handleSave(user.id)}
                        >
                          Save
                        </button>
                        <button
                          type="button"
                          className="users-action-button users-cancel-button"
                          onClick={cancelEdit}
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          type="button"
                          className="users-action-button users-edit-button"
                          onClick={() => startEdit(user)}
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          className="users-action-button users-delete-button"
                          onClick={() => handleRemove(user.id)}
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </td>
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
