import { Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { screenApi, screenCreate } from "../../Redux/Action/ScreenApiAction";
import { useNavigate } from "react-router";

const CreateScreen = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const navigating = () =>{
    navigate("dashboard/screen/list")
  }

  return (
    <>
      <Formik
        initialValues={{ name: "", description: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);

          dispatch(screenCreate(values));
          navigating()
          dispatch(screenApi());
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="d-flex justify-content-center">
              <b className="display-3">Add screen</b>
            </div>
            <div>
              <b className="display-6">Name: </b>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                className="form-control"
              />
              {errors.name && touched.name && errors.name}
            </div>

            <div>
              <b className="display-6">Description</b>
              <input
                type="text"
                name="description"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
                className="form-control"
              />
              {errors.description && touched.description && errors.description}
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary mt-3">
                Submit
              </button>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
};

export default CreateScreen;
