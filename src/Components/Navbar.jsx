import { NavLink, useNavigate } from "react-router-dom";
import { BiCartAlt } from "react-icons/bi";

import "./style.css";
import { items } from "./Data";
import { useState } from "react";

const Navbar = ({ setData , cart}) => {
  const filterByCategory = (category) => {
    const element = items.filter((product) => product.category === category);
    setData(element);
  };

  const filterByPrice = (price) => {
    const element = items.filter((product) => product.price == price);
    setData(element);
  };

  const [searchTerm, setSearchTerm] = useState("")

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
    setSearchTerm("")
  }

  return (
    <>
      <header className="sticky-top">
        <div className="nav-bar">
          <NavLink to="/" className="brand">
            E-Cart
          </NavLink>
          <form
          onSubmit={handleSubmit} 
          className="search-br">
            <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
             type="text"
              placeholder="Serch Product" />
          </form>
          <NavLink to="/cart" className="cart">
          <button type="button" className="btn btn-primary position-relative">
          <BiCartAlt />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
                <span className="visually-hidden"></span>
              </span>
            </button>
          </NavLink>
        </div>
        <div className="navbar-wrapper">
          <div className="items">Filter By</div>
          <div className="items" onClick={() => setData(items)}>
            No Filter
          </div>
          <div className="items" onClick={() => filterByCategory("mobiles")}>
            Mobiles
          </div>
          <div className="items" onClick={() => filterByCategory("laptops")}>
            Laptop
          </div>
          <div className="items" onClick={() => filterByCategory("tablets")}>
            Tablet
          </div>
          <div className="items" onClick={() => filterByPrice(29999)}>
            {">="}29999
          </div>
          <div className="items" onClick={() => filterByPrice(49999)}>
            {">="}49999
          </div>
          <div className="items" onClick={() => filterByPrice(69999)}>
            {">="}69999
          </div>
          <div className="items" onClick={() => filterByPrice(89999)}>
            {">="}89999
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
