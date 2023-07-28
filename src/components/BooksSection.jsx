import React from "react";

const BooksSection = ({ data }) => {
  console.log(data);
  return (
    <div className="d-flex justify-content-center align-items-center flex-wrap">
      {data &&
        data.map((item, index) => (
          <div className="card">
            <div className="text-white">{item.bookname}</div>
          </div>
        ))}
    </div>
  );
};

export default BooksSection;
