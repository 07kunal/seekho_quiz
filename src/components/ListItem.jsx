import React from "react";

const ListItem = ({ icon, title, subtitle }) => {
  return (
    <div className="d-flex align-items-center">
      <div style={{ fontSize: "24px" }}>
        <i className={icon}></i>
      </div>
      <div className="m-2">
        <h6 className="mb-0">{title}</h6>
        <p className="mb-0 opacity-75">{subtitle}</p>
      </div>
    </div>
  );
};

export default ListItem;
