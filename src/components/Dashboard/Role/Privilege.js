import React from "react";
import ReactSelect from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
  { value: "lalipop", label: "lalipop" },
  { value: "nuget", label: "nuget" },
];
const Privilege = (props) => {
  const { setPrivilege } = props;
  return (
    <>
      <div
        class="modal-lg fade mt-5"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        style={{ display: "block", opacity: "1" }}
      >
        <div class="modal-dialog-lg mt-5">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Privilege SetUp
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
                    setPrivilege(false);
                  }}
                >
                  &times;
                </span>
              </button>
            </div>
            <div className="d-flex justify-content-around m-2">
              <div> {<ReactSelect options={options} />}</div>
              <div> {<ReactSelect options={options} isMulti />}</div>
              <button className="btn btn-primary">Add</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privilege;
