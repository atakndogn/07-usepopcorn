import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

//import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));

/* 
function Test() {
  const [rating, setRating] = useState(0);

  return (
    <div>
      <StarRating
        maxRating={7}
        color="#11abcd"
        size={30}
        className="test"
        defaultRating={3}
        onSetRating={setRating}
      />
      <span>My Rating {rating}</span>
    </div>
  );
} */

root.render(
  <React.StrictMode>
    <App />

    {/* <Test /> */}

    {/*
    <StarRating messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]} />

    <StarRating
      maxRating={7}
      color="#11abcd"
      size={30}
      className="test"
      defaultRating={3}
    />
    */}
  </React.StrictMode>
);
