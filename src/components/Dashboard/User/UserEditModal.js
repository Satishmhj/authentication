import { Formik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../Redux/Action/UserApiAction";

const UserEditModal = (props) => {
  const { setEdit, edit, pass } = props;

  const userUpdate = useSelector((state) => state.user.userUpdate);
  console.log(userUpdate);
  let dispatch = useDispatch();

  return (
    <>
      <div
        class="modal fade mt-5"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        style={{ display: "block", opacity: "1" }}
      >
        <div class="modal-dialog mt-5">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Update User
              </h5>
              <button
                type="button"
                class="btn btn-danger"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span
                  aria-hidden="true"
                  onClick={() => {
                    setEdit(false);
                  }}
                >
                  &times;
                </span>
              </button>
            </div>
            <div>
              <div>
                <Formik
                  initialValues={{ name: pass.name, email: pass.email, password: pass.password }}
                  validate={(values) => {
                    const errors = {};
                    if (!values.email) {
                      errors.email = "Required";
                    } else if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                        values.email
                      )
                    ) {
                      errors.email = "Invalid email address";
                    }
                    return errors;
                  }}
                  onSubmit={(values, { setSubmitting }) => {
                    dispatch(updateUser(pass.id,values));
                    setEdit(false)
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
                        <a>Name</a>
                        <input
                          type="text"
                          name="name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.name}
                        />
                      </div>
                      <br />
                      <div className="d-flex justify-content-center">
                        <a>Email</a>
                        <input
                          type="email"
                          name="email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                        />
                        {errors.email && touched.email && errors.email}
                      </div>
                      <br />
                      <div className="d-flex justify-content-center">
                        <a>password</a>
                        <input
                          type="password"
                          name="password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                        />
                        {errors.password && touched.password && errors.password}
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
                      <br />
                    </form>
                  )}
                </Formik>
              </div>
            </div>

            {/* <div class="modal-footer">
              <button
                type="button"
                class="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setEdit(false)}
              >
                Cancel
              </button>
              <button type="button" class="btn btn-success">
                Update
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserEditModal;
