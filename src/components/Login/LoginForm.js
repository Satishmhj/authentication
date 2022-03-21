import React from "react";
import { Formik, Form, Field } from "formik";
import { Api } from "../../Api";
import { useNavigate } from "react-router";

// const navigating = () => {
//   let navigate = useNavigate();

//   navigate("/dashboard");
// };
// console.log(navigating);

const loginPageStyle = {
  margin: "100px auto 37px",
  maxWidth: "530px",
  background: "#fff",
  padding: "30px",
  borderRadius: "10px",
  boxShadow: "0px 0px 10px 10px rgba(0,0,0,0.15)",
};

// let navigate = useNavigate();

const Basic = () => (
  <>
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          // setTimeout(() => {
          // //   alert(JSON.stringify(values, null, 2));
          //   console.log(response);
          // }, 400);
          const response = await Api("auth/login", "POST", values);
          setSubmitting(false);
          console.log(response);

          if (response.success) {
            // let navigate = useNavigate();
            // navigate("/dashboard")
            // navigating
            alert(response.message);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form style={loginPageStyle}>
            <div className="d-flex justify-content-center">
              <a className="display-3" style={{ textDecoration: "none" }}>
                Log In
              </a>
            </div>
            <div className="form-group">
              <label htmlFor="email" style={{ margin: "5px" }}>
                Email
              </label>
              <Field
                type="text"
                name="email"
                className={"form-control"}
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" style={{ margin: "5px" }}>
                Password
              </label>
              <Field
                type="password"
                name="password"
                className={"form-control"}
                placeholder="Password"
              />
            </div>
            <div
              className="d-flex justify-content-center"
              style={{ margin: "5px" }}
            >
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                Login
              </button>
            </div>
            {/* <button type="submit" disabled={isSubmitting}>
              Submit
            </button> */}
          </Form>
        )}
      </Formik>
    </div>
  </>
);

export default Basic;
