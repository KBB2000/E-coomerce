import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { items } from "./Data";
import Product from "./Product"

const Search = () => {
  const { term } = useParams();

  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const newFilteredData = () => {
      const data = items.filter((p) =>
        p.title.toLowerCase().includes(term.toLocaleLowerCase())
      );
      setFilterData(data);
    };
    newFilteredData();
  }, [term]);

  return (
    <Product items={filterData} />
  )
};

export default Search;
