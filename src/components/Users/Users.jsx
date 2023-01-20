import UsersList from "./UsersList/UsersList";
import CreateUser from "./CreateUser/CreateUser";

import style from "./Users.module.css";

const Users = props => {
  const createUserHandler = (name, age) => {
    const data = {
      name,
      age,
      id: Math.random(),
    };

    props.onAddUser(data);
  };
  return (
    <div className={style.wrapper}>
      <CreateUser onCreateUser={createUserHandler} />

      <UsersList users={props.users} />
    </div>
  );
};
export default Users;
