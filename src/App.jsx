import { useState } from "react";
import Users from "./components/Users/Users";

const INITIAL_USERS = [
  { name: "Joker", age: 24, id: "0.1653745419310675" },
  { name: "John", age: 17, id: "0.8491629535571732" },
];

const App = props => {
  const [users, setUsers] = useState(INITIAL_USERS);

  const addUserHandler = user => setUsers(prevUsers => [...prevUsers, user]);

  return (
    <div className="global-container">
      <Users onAddUser={addUserHandler} users={users} />
    </div>
  );
};

export default App;
