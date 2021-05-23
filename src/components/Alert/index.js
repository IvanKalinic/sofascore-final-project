import React,{memo} from "react";
import "./index.scss"

function Alert({ type, text }) {
  return <div className={`alert alert-${type}`}>{text}</div>;
}

export default memo(Alert);
