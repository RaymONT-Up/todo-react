import React, { Fragment } from "react";
import ReactDom from "react-dom";

import Button from "../Button/Button";
import Card from "../Card/Card";
import style from "./Modal.module.css";

const ModalWindow = props => {
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
const Modal = props => {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <ModalWindow
          onClick={props.onClick}
          title={props.title}
          content={props.content}
        />,
        document.getElementById("modal")
      )}
    </Fragment>
  );
};
export default Modal;
