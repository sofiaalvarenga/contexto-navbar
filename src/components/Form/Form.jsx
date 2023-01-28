import React, { useContext } from "react";
import UserContext from "../UserContext/UserContext";
import './Form.css'

const Form = () => {
  const { name, setName } = useContext(UserContext);

  return (
    <div className="Form">
      <div>
        <label>Your Name:</label>{" "}
        <input
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
    </div>
  );
};
export default Form;