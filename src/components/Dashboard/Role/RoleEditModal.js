import { Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { roleUpdate } from "../../Redux/Action/RoleApiAction";

const RoleEditModal = (props) => {
  const { setRoleEdit, roledata } = props;

  let dispatch = useDispatch();
  return (
    <>
      <div>
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
                  Update Role
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
                      setRoleEdit(false);
                    }}
                  >
                    &times;
                  </span>
                </button>
              </div>
              <div>
                <div>
                  <Formik
                    initialValues={{
                      name: roledata.name,
                      description: roledata.description,
                    }}
                    validate={(values) => {
                      const errors = {};
                      if (!values.description) {
                        errors.description = "Required";
                      }
                      if (!values.name) {
                        errors.name = "Required";
                      }
                      return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                      //   dispatch(updateScreen(data.id, values));
                      dispatch(roleUpdate(roledata.id, values));
                      setRoleEdit(false);
                      // alert("submitted");
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
                          <b className="display-7 m-3">Name</b>
                          <input
                            type="text"
                            name="name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                            className="form-control m-3"
                          />
                        </div>
                        <br />
                        <div className="d-flex justify-content-center">
                          <b className="display-7 m-1">Description</b>
                          <input
                            type="text"
                            name="description"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.description}
                            className="form-control m-1"
                          />
                          {errors.description &&
                            touched.description &&
                            errors.description}
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoleEditModal;
