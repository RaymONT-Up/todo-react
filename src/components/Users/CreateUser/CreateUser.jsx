import { useState } from "react";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
import style from "./CreateUser.module.css";

const FormCreateUser = props => {
  const [inputName, setInputName] = useState("");
  const [inputAge, setinputAge] = useState("");

  const inputNameChangeHandler = event => setInputName(event.target.value);
  const inputAgeChangeHandler = event => setinputAge(event.target.value);

  const createUserFormSubmitHadler = event => {
    event.preventDefault();
    props.onCreateUser(inputName, inputAge);
  };

  return (
    <Card className={style.createUserCard}>
      <form className={style.form} onSubmit={createUserFormSubmitHadler}>
        <label className={style.label}>
          Name
          <input
            className={style.input}
            type="name"
            required
            onChange={inputNameChangeHandler}
            value={inputName}
          />
        </label>
        <label className={style.label}>
          Age
          <input
            className={style.input}
            type="number"
            required
            onChange={inputAgeChangeHandler}
            value={inputAge}
          />
        </label>
        <Button className="red" type={"submit"}>
          Add User
        </Button>
      </form>
    </Card>
  );
};
export default FormCreateUser;