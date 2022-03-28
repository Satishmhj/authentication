import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import ReactSelect from "react-select";
import { Api } from "../../../Api";
import { screenApi } from "../../Redux/Action/ScreenApiAction";

const Privilege = (props) => {
  const { setPrivilege } = props;
  // console.log(roleId);

  const location = useLocation();
  console.log(location.state);

  const id = location.state;

  const [data, setData] = useState([]);

  const [screenChoice, setScreenChoice] = useState();
  const [crud, setCrud] = useState();

  let dispatch = useDispatch();

  console.log(data);

  const screens = useSelector((state) => state.screen.screens);
  // console.log(screens);

  const handleChange = (options) => {
    setScreenChoice(options.value);
  };
  // console.log(screenChoice);
  // console.log(options);
  const handleChangeCrud = (options) => {
    let create = false;
    let update = false;
    let read = false;

    options.forEach((element) => {
      switch (element.value) {
        case "Create":
          create = true;
          break;
        case "Update":
          update = true;
          break;
        case "Read":
          read = true;
          break;

        default:
          break;
      }
    });

    setCrud({ create, update, read });
  };
  // console.log(crud);

  const options = [
    { value: "Create", label: "Create" },
    { value: "Read", label: "Read" },
    { value: "Update", label: "Update" },
    { value: "Delete", label: "Delete" },
  ];
  useEffect(() => {
    dispatch(screenApi());
  }, []);

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
        <div class="modal-dialog-lg mt-5 pl-4">
          <div class="modal-content">
            <div class="modal-header">
              <div class="modal-title " id="exampleModalLabel">
                <div className="d-flex justify-content-center">
                  <b className="text-success display-5">Privilege SetUp</b>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-around m-2">
              <div>
                <b className="text-danger">Screen List</b>
                <ReactSelect
                  options={screens?.map((items) => {
                    return {
                      value: items.name,
                      label: items.name,
                    };
                  })}
                  onChange={handleChange}
                />
              </div>
              <div></div>
              <div>
                <b className="text-danger">CRUD operation</b>
                {
                  <ReactSelect
                    options={options}
                    isMulti
                    onChange={handleChangeCrud}
                  />
                }
              </div>
              <button
                className="btn btn-primary"
                onClick={() => {
                  let screenPermissions = [...data];
                  screenPermissions.push({ [screenChoice]: crud });
                  setData(screenPermissions);
                }}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>

      <table class="table mt-5">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">screens</th>
            <th scope="col">privilege</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => {
            console.log();
            let screens = Object.keys(item);
            return (
              <>
                <tr>
                  <th scope="row">1</th>
                  <td>{screens[0]}</td>
                  <td>{JSON.stringify(item[screens[0]])}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>

      <div className="d-flex justify-content-center mt-5">
        <button
          className="btn btn-primary btn-lg"
          onClick={async () => {
            let res = await Api("roles/screen/mapping", "POST", {
              id: id.id,
              mapping: { data },
            });
          }}
        >
          Save
        </button>
      </div>
    </>
  );
};

export default Privilege;
