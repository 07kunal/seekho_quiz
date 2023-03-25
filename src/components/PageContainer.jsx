import React from "react";
import Header from "./Header";

const PageContainer = ({ children }) => {
  return (
    <>
      <Header />

      <div
        className="mx-auto p-4 d-flex justify-content-center "
        style={{ maxWidth: "700px" }}
      >


        {children}
      </div>
    </>
  );
};

export default PageContainer;
