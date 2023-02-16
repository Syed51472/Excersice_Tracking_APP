import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "../App.css";

const Showactivity = (props) => {
  const [show, setShow] = useState(false);
  const [getId, setGetId] = useState("");

  const handleClose = async () => {
    setShow(false);
    await fetch(`http://localhost:4000/api/route/update/${getId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(props.state),
    });
  };
  const handleShow = async (id) => {
    setShow(true);
    var data = await fetch(`http://localhost:4000/api/route/edit/${id}`)
      .then((data1) => data1.json())
      .then((res) => props.setModalState(res));
    // console.log(props.state._id);
    setGetId(id);
  };
  const navigate = useNavigate();

  const deletefun = async (id) => {
    await fetch(`http://localhost:4000/api/route/delete/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then((state) => {
      state.json();
      console.log("data deleted");
    });
    props.fetchData();
  };

  const editData = async (id) => {
    console.log(id);
    var data = await fetch(`http://localhost:4000/api/route/edit/${id}`)
      .then((data1) => data1.json())
      .then((res) => props.setState(res));
    // console.log(res, "Response");
    props.setGetId(id);
    console.log(props.state, "DATATTA");
    props.state.name = data.name;
    props.state.description = data.description;
    props.state.activity = data.activity;
    props.state.duration = data.duration;
    props.state.date = data.date;
  };

  async function updateFun() {
    await fetch(`http://localhost:4000/api/route/update/${props.getId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(props.state),
    });
    props.fetchData();
  }

  console.log(props.data, "data");
  return (
    <div className="m-5">
      <h1 className="text-center showActivity_title">
        Activities{" "}
        <i
          class="bi bi-plus-circle-fill addIcon"
          onClick={() => {
            props.setState({
              name: "",
              description: "",
              activity: "",
              duration: "",
              date: "",
            });
            navigate("/activityform");
          }}
        ></i>
      </h1>
      <div className="container mt-5">
        <div className="row justify-content-center">
          {props.data.map((item) => {
            return (
              <div className="col-lg-4 col-md-6 col-12 mb-4">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">{item.name}</h4>
                    <p className="card-text">
                      <strong>Description:</strong> {item.description}
                    </p>
                    <p className="card-text">
                      <strong>Type:</strong> {item.activity}
                    </p>
                    <p className="card-text">
                      <strong>Time:</strong> {item.duration}
                    </p>
                    <p className="card-text">
                      <strong>Date:</strong> {item.date}
                    </p>
                    <a
                      href="#"
                      className="btn btn-outline-danger"
                      onClick={() => {
                        deletefun(item._id);
                      }}
                    >
                      Delete
                    </a>
                    <button
                      className="btn btn-default btn-outline-success mx-3"
                      data-toggle="modal"
                      data-target="#modalContactForm"
                      onClick={() => editData(item._id)}
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div
          className="modal fade"
          id="modalContactForm"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header text-center">
                <h4 className="modal-title w-100 font-weight-bold">
                  Edit Form
                </h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body mx-3">
                <div className="md-form mb-4">
                  {/* <i className="fas fa-user prefix grey-text pr-2" /> */}
                  <label
                    data-error="wrong"
                    data-success="right"
                    htmlFor="form34"
                  >
                    Name
                  </label>
                  <input
                    name="name"
                    value={props.state.name}
                    // onChange={onChangeInput}
                    onChange={
                      (e) =>
                        props.setState({
                          ...props.state,
                          name: e.target.value,
                        })
                      // handleInput
                    }
                    type="text"
                    id="form34"
                    className="form-control validate"
                  />
                </div>
                <div className="md-form mb-3">
                  {/* {/ <i className="fas fa-pencil prefix grey-text pr-2	" /> /} */}
                  <i className="fa-light fa-circle-info"></i>
                  <label
                    data-error="wrong"
                    data-success="right"
                    htmlFor="form8"
                  >
                    Description
                  </label>
                  <textarea
                    name="description	"
                    value={props.state.description}
                    onChange={
                      (e) =>
                        props.setState({
                          ...props.state,
                          description: e.target.value,
                        })
                      // handleInput
                    }
                    type="text"
                    id="form8"
                    className="md-textarea form-control"
                    rows={4}
                    defaultValue={""}
                  />
                </div>
                <div className="md-form mb-4">
                  {/* {/ <i className="fas fa-envelope prefix grey-text pr-2" /> /} */}
                  <i className="fa-solid fa-calendar-days pr-2"></i>
                  <label
                    data-error="wrong"
                    data-success="right"
                    htmlFor="form29"
                  >
                    Activity
                  </label>

                  <select
                    className="form-control validate"
                    required
                    name="activity"
                    value={props.state.activity}
                    onChange={
                      (e) =>
                        props.setState({
                          ...props.state,
                          activity: e.target.value,
                        })
                      // handleInput
                    }
                    id="form29"
                  >
                    {/* <option value="">Select any option</option> */}
                    <option value="walking">walking</option>
                    <option value="Running">Running</option>
                    <option value="Bicycling">Bicycling</option>
                    <option value="Hiking">Hiking</option>
                    <option value="Swimming">Swimming</option>
                  </select>
                </div>
                <div className="md-form ">
                  {/* <i className="fas fa-tag prefix grey-text pr-2" /> */}
                  <label
                    data-error="wrong"
                    data-success="right"
                    htmlFor="form32"
                  >
                    Duration
                  </label>
                  <input
                    name="duration"
                    value={props.state.duration}
                    onChange={
                      (e) =>
                        props.setState({
                          ...props.state,
                          duration: e.target.value,
                        })
                      // handleInput
                    }
                    type="text"
                    id="form32"
                    className="form-control validate"
                  />
                </div>
                <div className="md-form ">
                  {/* <i className="fas fa-tag prefix grey-text pr-2" /> */}
                  <label
                    data-error="wrong"
                    data-success="right"
                    htmlFor="form32"
                  >
                    Date
                  </label>
                  <input
                    name="activityType"
                    value={props.state.date}
                    onChange={
                      (e) =>
                        props.setState({
                          ...props.state,
                          date: e.target.value,
                        })
                      // handleInput
                    }
                    type="date"
                    id="form32"
                    className="form-control validate"
                  />
                </div>
              </div>
              <div className="modal-footer d-flex justify-content-center">
                <button
                  className="btn btn-outline-warning"
                  onClick={updateFun}
                  data-dismiss="modal"
                >
                  Update
                  {/* <i className="fas fa-paper-plane-o ml-1" /> */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showactivity;
