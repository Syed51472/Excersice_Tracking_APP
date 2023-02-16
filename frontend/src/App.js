import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Excersice from "./Components/Excersice";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Aboutusnav from "./Pages/Aboutusnav";
import Activityform from "./Pages/Activityform";
import Bicycling from "./Pages/Bicycling";
import Contact from "./Pages/Contact";
import Dashboard from "./Pages/Dashboard";
import Hiking from "./Pages/Hiking";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Running from "./Pages/Running";
import Showactivity from "./Pages/Showactivity";
import Swimming from "./Pages/Swimming";
import Walking from "./Pages/Walking";

const App = () => {
  const [showDashboard, setShowDashboard] = useState(() => {
    const saved = localStorage.getItem("dash");
    const value = JSON.parse(saved);
    return value || false;
  });
  const [getId, setGetId] = useState("");
  const [stateLogin, setStateLogin] = useState(() => {
    const saved = localStorage.getItem("login");
    const value = JSON.parse(saved);
    return value || false;
  });
  const [data, setData] = useState([]);
  const [modalState, setModalState] = useState(data);
  // {
  //   name: "",
  //   description: "",
  //   activity: "",
  //   duration: "",
  //   date: "",
  // }
  const [state, setState] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch("http://localhost:4000/api/route/get");
      const data = await response.json();
      setData(data);
      console.log(data);
      // console.log(props.data, "Activity Form");
    } catch (error) {
      console.log(error);
    }
  }

  console.log("Data", data);

  useEffect(() => {
    fetchData();
    localStorage.setItem("login", JSON.stringify(stateLogin));
    localStorage.setItem("dash", JSON.stringify(showDashboard));
  }, [stateLogin, showDashboard]);
  return (
    <div>
      <Router>
        <Navbar
          stateLogin={stateLogin}
          setStateLogin={setStateLogin}
          showDashboard={showDashboard}
          setShowDashboard={setShowDashboard}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              <Login
                stateLogin={stateLogin}
                setStateLogin={setStateLogin}
                setShowDashboard={setShowDashboard}
              />
            }
          />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/aboutus" element={<Aboutusnav />} />
          <Route path="/services" element={<Excersice />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/running" element={<Running />} />
          <Route path="/walking" element={<Walking />} />
          <Route path="/hiking" element={<Hiking />} />
          <Route path="/swimming" element={<Swimming />} />
          <Route path="/bicycling" element={<Bicycling />} />
          <Route
            path="/activityform"
            element={
              <Activityform
                data={data}
                setData={setData}
                fetchData={fetchData}
                state={state}
                setState={setState}
              />
            }
          />
          <Route
            path="/showActivity"
            element={
              <Showactivity
                data={data}
                fetchData={fetchData}
                state={state}
                setState={setState}
                modalState={modalState}
                setModalState={setModalState}
                getId={getId}
                setGetId={setGetId}
              />
            }
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
