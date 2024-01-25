import React from 'react';
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = ({items, cart , setCart}) => {

  const addToCart = (id, title, description,imgSrc,price) => {
    const obj ={
      id, title, description,imgSrc,price
    }
    setCart([...cart, obj])
    toast.success('Your item Sucessfully Added', {
      position: "top-right",
      autoClose: 150,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      // transition: Bounce
      });
  }

  return (
    <>
    <ToastContainer
position="top-right"
autoClose={200}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
// transition: Bounce
/>
      <div className="container my-5">
        <div className="row">
        {
            items.map((products) => {
                return(
                    <>
                    <div key={products.id} className="col-lg-4 my-3 col-md-6 text-center">
                    <div className="card" style={{width: "18rem"}}>
                        <NavLink to = {`/product/${products.id}`} style={{display: "flex", justifyContent:"center",alignItems:"center"}}>
                        <img className="card-img-top" src={products.imgSrc} alt="Card image cap" />
                        </NavLink>
                        <div className="card-body">
                            <h5 className="card-title">{products.title}</h5>
                            <p className="card-text">{products.description}</p>
                            <button className='btn btn-primary mx-3'>₹.{products.price}</button>
                            <button
                            onClick={() => addToCart(products.id, products.title, products.description,products.imgSrc,products.price)} 
                            className='btn btn-danger'>Add To Cart</button>
                        </div>
                      </div>
                     </div>
                    </>
                )
            })
        }
      </div>
      </div>
    </>
  );
}

export default Product;
