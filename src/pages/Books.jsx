import React, { useState, useEffect } from "react";
import axios from "axios";
import BooksSection from "../components/BooksSection";

const Books = () => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1001/api/v1/getBooks"
        );
        setData(response.data.books);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-dark" style={{ minHeight: "91.5vh" }}>
      <div className="d-flex justify-content-center align-items-center py-3">
        <h4 className="text-white">Books section</h4>
      </div>
      {Data ? (
        <BooksSection data={Data} />
      ) : (
        <div className="text-white">Loading...</div>
      )}
    </div>
  );
};

export default Books;
