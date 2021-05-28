import Spinner from "react-loader-spinner";
import React, { memo } from "react";

import "./index.scss";

const Loader = () => {
  return (
    <div className="loader">
      <Spinner type="Oval" color="#404774" height={100} width={100} />
    </div>
  );
}

export default memo(Loader);
