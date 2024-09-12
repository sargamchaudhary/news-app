import React from "react";
import loading from "../Rolling-1s-200px.gif";

const Loading = () => {
  return (
    <div className="text-center">
      <img src={loading} alt="loading spinner" />
    </div>
  );
};

export default Loading;
