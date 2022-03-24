import { useState } from "react";
import "../../styling/styles.css";
import Input from "../../styling/Input";
import { useContext } from "react";
import { UserContext } from "../auth/UserContext";

function Form() {
  const { user } = useContext(UserContext);
  const [registered, setRegistered] = useState(false);

  if (registered === false && user) {
    return (
      <form className="form">
        {Input("Athugasemd:")}
        <button
          className="button"
          onClick={async () => {
            setRegistered(true);
          }}
        >
          Skrá mig
        </button>
      </form>
    );
  }
  return <p>Þú hefur skráð þig á þennan viðburð</p>;
}

export default Form;
