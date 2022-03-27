import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { createProducts } from "../../Redux/Action/ProductAction";
import { useNavigate } from "react-router";

const AddProducts = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <h1 className="display-4 text-center mt-3 mb-4">Add Products</h1>
      <Formik
        initialValues={{ name: "", description: "", image: [], quantity: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = "Required";
          }
          if (!values.description) {
            errors.description = "Required";
          }
          if (!values.image) {
            errors.image = "Required";
          }
          if (!values.quantity) {
            errors.quantity = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          // setTimeout(() => {
          //   alert(JSON.stringify(values, null, 2));
          //   setSubmitting(false);
          // }, 400);

          dispatch(createProducts(values));

          navigate("/dashboard/products/list");
        }}
      >
        {({ isSubmitting }) => (
          <Form className="d-flex flex-column">
            <div className="d-flex justify-content-center">
              <b>Name: </b>
              <Field type="text" name="name" />
            </div>
            <br />
            <div className="d-flex justify-content-center">
              <b>Description:</b>
              <Field type="text" name="description" />
            </div>
            <br />
            <div className="d-flex justify-content-center">
              <b>ImageUrl:</b>
              <Field type="url" name="image" />
            </div>
            <br />
            <div className="d-flex justify-content-center">
              <b>Quantity:</b>
              <Field type="number" name="quantity" />
            </div>
            <br />
            <div className="d-flex justify-content-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary"
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddProducts;
