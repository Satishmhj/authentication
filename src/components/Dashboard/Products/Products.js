import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { fetchProducts, products } from "../../Redux/Action/ProductAction";

const Products = () => {
  const products = useSelector((state) => state.products.products);
  console.log(products);

  let dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      <div className="container">
        <div className="display-4 d-flex justify-content-center mt-3">
          Products
        </div>
        <div className="row">
          {products?.map((items) => {
            const {
              createdAt,
              description,
              id,
              image,
              name,
              quantity,
              updateAt,
            } = items;
            return (
              <div key={id} className="col-4 mt-3">
                <div class="card">
                  <img
                    class="card-img-top"
                    // src={`https://betanews.com/wp-content/uploads/2014/11/${image}`}
                    src={`https://betanews.com/wp-content/uploads/2014/11/front.jpg`}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <b> {name}</b>
                    <br />
                    <b>quantity:{quantity}</b>

                    <p>{description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
