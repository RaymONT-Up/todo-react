import style from "./UserItem.module.css";
const UserItem = props => {
  return (
    <li className={style.userItem}>
      {props.name} - {props.age}
    </li>
  );
};
export default UserItem;
