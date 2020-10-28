import React from "react";
import { useStateValue } from "./StateProvider";

function PersonalHome() {
  const submitForm = () => {
    alert("Trying to submit form");
  };
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="personalhome">
      This is the personal Home screen
      <h1>Hiii {user?.email}</h1>
      <form onSubmit={submitForm}>
        <input type="file" placeholder="Your File Here" />
      </form>
    </div>
  );
}

export default PersonalHome;
