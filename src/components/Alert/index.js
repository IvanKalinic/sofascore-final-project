import React,{memo} from "react";
import "./index.scss"

const Alert = ({ type, text }) => {
  return <div className={`alert alert-${type}`}>{text}</div>;
}

export default memo(Alert);
