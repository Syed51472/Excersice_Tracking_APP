import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Activityform = (props) => {
  const navigate = useNavigate();
  // const [state, setState] = useState({
  //   name: "",
  //   description: "",
  //   activity: "",
  //   duration: "",
  //   date: "",
  // });

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(props.state, "State");

    await fetch("http://localhost:4000/api/route/insert", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(props.state),
    }).then((res) => {
      res.json();
      console.log("data send");
    });

    props.fetchData();
    navigate("/showActivity");
    props.setState({
      name: "",
      description: "",
      activity: "",
      duration: "",
      date: "",
    });
  }

  return (
    <div>
      <div className="container my-5">
        <div className="row activityForm">
          <form onSubmit={handleSubmit} className="form-group">
            <div>
              <label>Name</label>
              <input
                className="form-control"
                required
                type="text"
                name="name"
                value={props.state.name}
                onChange={
                  (e) =>
                    props.setState({ ...props.state, name: e.target.value })
                  // handleInput
                }
              />
            </div>

            <div>
              <label>Description</label>
              <input
                className="form-control"
                required
                type="text"
                name="description"
                value={props.state.description}
                onChange={
                  (e) =>
                    props.setState({
                      ...props.state,
                      description: e.target.value,
                    })
                  // handleInput
                }
              />
            </div>
            <div>
              <label>Activity</label>
              <select
                className="form-control"
                required
                name="activity"
                value={props.state.activity}
                onChange={
                  (e) =>
                    props.setState({ ...props.state, activity: e.target.value })
                  // handleInput
                }
              >
                <option value="">Select any option</option>
                <option value="walking">walking</option>
                <option value="Running">Running</option>
                <option value="Bicycling">Bicycling</option>
                <option value="Hiking">Hiking</option>
                <option value="Swimming">Swimming</option>
              </select>
            </div>
            <div>
              <label>Duration</label>
              <input
                className="form-control"
                required
                type="text"
                name="duration"
                value={props.state.duration}
                onChange={
                  (e) =>
                    props.setState({ ...props.state, duration: e.target.value })
                  // handleInput
                }
              />
            </div>

            <div>
              <label>Date</label>
              <input
                className="form-control"
                required
                type="date"
                name="date"
                value={props.state.date}
                onChange={
                  (e) =>
                    props.setState({ ...props.state, date: e.target.value })
                  // handleInput
                }
              />
            </div>
            <button type="submit" className="btn btn-outline-warning my-4">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Activityform;
