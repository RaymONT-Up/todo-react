import Card from "../../UI/Card/Card";
import UserItem from "./UserItem/UserItem";
import style from "./UsersList.module.css";
const UserList = props => {
  return (
    <Card>
      <ul className={style.list}>
        {props.users.map(item => {
          return <UserItem name={item.name} age={item.age} key={item.id} />;
        })}
      </ul>
    </Card>
  );
};
export default UserList;
