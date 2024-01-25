import React from "react";
import { IconName } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Cart = ({ cart, setCart }) => {
  return (
    <>
      <div className="container my-4" style={{ width: "52%" }}>
        {cart.length == 0 ? (
          <>
            <div className="text-center">
              <h1>Your Cart is Empty</h1>
              <NavLink to={"/"} className="btn btn-warning">
                Continue Shopping...
              </NavLink>
            </div>
          </>
        ) : (
          cart.map((product) => {
            return (
              <>
                <div className="card mb-3 my-2" style={{ window: "700px" }}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={product.imgSrc}
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body text-center">
                        <h2 className="card-title">{product.title}</h2>
                        <p className="card-text">{product.description}</p>
                        <p className="card-text"></p>
                        <button className="btn btn-primary mx-3">
                          ₹.{product.price}
                        </button>
                        <button className="btn btn-danger">Add To Cart</button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })
        )}
      </div>
      {cart.length != 0 && (
        <div
          className="container text-center my-5"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button className="btn btn-warning m-3">Warning</button>
          <button onClick={() => setCart("")} className="btn btn-success">
            Clear
          </button>
        </div>
      )}
    </>
  );
};

export default Cart;
