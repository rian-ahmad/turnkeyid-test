import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

import Persons from "./components/persons";
import Pagination from "./components/pagination";

function App() {
  const [persons, setPersons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [personsPerPage] = useState(4);

  useEffect(() => {
    const fetchPersons = async () => {
      setLoading(true);
      const res = await axios.get("https://randomuser.me/api/?results=20");
      setPersons(res.data.results);
      setLoading(false);
    };
    fetchPersons();
  }, []);

  // get current pagePersons
  const indexOfLastPage = currentPage * personsPerPage;
  const indexOfFirstPage = indexOfLastPage - personsPerPage;
  const currentPersons = persons.slice(indexOfFirstPage, indexOfLastPage);

  // change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mt-2 mb-5">
      <Pagination
        personsPerPage={personsPerPage}
        totalPersons={persons.length}
        paginate={paginate}
      />
      <Persons persons={currentPersons} loading={loading} />
    </div>
  );
}

export default App;
