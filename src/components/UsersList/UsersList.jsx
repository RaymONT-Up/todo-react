import UserItem from "./UserItem/UserItem";
import style from "./UsersList.module.css";
const UserList = props => {
  return (
    <ul className={style.list}>
      {props.users.map(item => {
        return <UserItem name={item.name} age={item.age} key={item.id} />;
      })}
    </ul>
  );
};
export default UserList;
