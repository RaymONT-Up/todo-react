import Button from "../Button/Button";
import Card from "../Card/Card";
import style from "./Modal.module.css";
const Modal = props => {
  return (
    <div className={style.wrapper}>
      <div className={style.backdrop} onClick={props.onClick}></div>
      <Card className={style.modalWindow}>
        <h6 className={style.title}>{props.title}</h6>
        <div className={style.content}>{props.content}</div>
        <Button className={style.button} onClick={props.onClick}>
          Закрыть
        </Button>
      </Card>
    </div>
  );
};
export default Modal;
