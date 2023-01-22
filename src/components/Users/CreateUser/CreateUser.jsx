import { useState } from "react";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
import Modal from "../../UI/Modal/Modal";
import style from "./CreateUser.module.css";

const FormCreateUser = props => {
  const [inputName, setInputName] = useState("");
  const [inputAge, setinputAge] = useState("");
  const [modalError, setModalError] = useState();

  const inputNameChangeHandler = event => setInputName(event.target.value);
  const inputAgeChangeHandler = event => setinputAge(event.target.value);

  const createUserFormSubmitHadler = event => {
    event.preventDefault();
    if (inputName.length === 0 || inputAge.length === 0) {
      setModalError({
        title: "Заполните поля",
        content: "Необходимо дабы в полях был минимум 1 символ",
      });
      return;
    }
    if (inputAge < 1) {
      setModalError({
        title: "Заполните поля",
        content: "Возвраст не может быть меньше единицы",
      });
      return;
    }

    props.onCreateUser(inputName, inputAge);
  };

  const closeErrorModalHandler = () => setModalError(null);
  return (
    <div>
      {modalError && (
        <Modal
          title={modalError.title}
          content={modalError.content}
          onClick={closeErrorModalHandler}
        />
      )}
      <Card className={style.createUserCard}>
        <form className={style.form} onSubmit={createUserFormSubmitHadler}>
          <label className={style.label}>
            Name
            <input
              className={style.input}
              type="name"
              onChange={inputNameChangeHandler}
              value={inputName}
            />
          </label>
          <label className={style.label}>
            Age
            <input
              className={style.input}
              type="number"
              onChange={inputAgeChangeHandler}
              value={inputAge}
            />
          </label>
          <Button type={"submit"}>Add User</Button>
        </form>
      </Card>
    </div>
  );
};
export default FormCreateUser;
