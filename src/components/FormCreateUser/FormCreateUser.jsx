import Button from "../UI/Button/Button";
import style from "./FormCreateUser.module.css";
const FormCreateUser = props => {
  return (
    <form className={style.form}>
      <label className={style.label}>
        Name
        <input className={style.input} type="name" required />
      </label>
      <label className={style.label}>
        Age
        <input className={style.input} type="number" required />
      </label>
      <Button className="red">Add User</Button>
    </form>
  );
};
export default FormCreateUser;
