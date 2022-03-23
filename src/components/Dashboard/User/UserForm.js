import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { createUser } from "../../Redux/Action/UserApiAction";

const userFormValidation = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email address format")
    .required("Email is required"),
  password: yup
    .string()
    .min(3, "Password must be 3 characters at minimum")
    .required("Password is required"),
  name: yup.string().required("name required"),
});

const UserForm = () => {
  let dispatch = useDispatch();
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Formik
              initialValues={{ email: "", password: "", name: "" }}
              validationSchema={userFormValidation}
              onSubmit={(values) => {
                console.log(values);
                alert("User is Created");
                dispatch(createUser(values));
              }}
            >
              {({ touched, errors, isSubmitting, values }) => (
                <div>
                  <div className="row mb-5">
                    <div className="col-lg-12 text-center">
                      <h1 className="mt-5 display-4 text-primary">
                        Create User
                      </h1>
                    </div>
                  </div>
                  <Form>
                    <div className="form-group">
                      <label htmlFor="name" className="display-6">
                        Name
                      </label>
                      <Field
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        autocomplete="off"
                        className={`mt-2 form-control
                          ${touched.name && errors.name ? "is-invalid" : ""}`}
                      />

                      <ErrorMessage
                        component="div"
                        name="name"
                        className="invalid-feedback"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email" className="display-6">
                        Email
                      </label>
                      <Field
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        autocomplete="off"
                        className={`mt-2 form-control
                          ${touched.email && errors.email ? "is-invalid" : ""}`}
                      />

                      <ErrorMessage
                        component="div"
                        name="email"
                        className="invalid-feedback"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="password" className="display-6">
                        Password
                      </label>
                      <Field
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        autocomplete="off"
                        className={`mt-2 form-control
                          ${
                            touched.password && errors.password
                              ? "is-invalid"
                              : ""
                          }`}
                      />
                      <ErrorMessage
                        component="div"
                        name="password"
                        className="invalid-feedback"
                      />
                    </div>
                    <div className="d-flex justify-content-center">
                      <button
                        type="submit"
                        className="btn btn-primary btn-block mt-4"
                        // disabled={isSubmitting}
                      >
                        Create User
                      </button>
                    </div>
                  </Form>
                </div>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserForm;
