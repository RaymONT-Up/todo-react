import style from "./Button.module.css";
const Button = props => {
  const classes = `${style.button} ${!!props.className ? props.className : ""}`;

  return (
    <button className={classes} onClick={props.onClick}>
      {props.children}
    </button>
  );
};
export default Button;
