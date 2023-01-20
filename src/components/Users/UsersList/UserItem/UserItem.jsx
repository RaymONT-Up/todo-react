import style from "./UserItem.module.css";
const UserItem = props => {
  return (
    <li className={style.item}>
      <div className={style.box}>Name: {props.name}</div>
      <div className={style.box}>Age: {props.age}</div>
    </li>
  );
};
export default UserItem;
