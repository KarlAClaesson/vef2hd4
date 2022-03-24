import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { UserContext } from "../auth/UserContext";
import "../../styling/styles.css";

import Button from "../../styling/Button";

function Footer() {
  const { user } = useContext(UserContext);

  return (
    <footer>
      {user ? (
        <p className="user">Skráður inn sem {user}</p>
      ) : (
        <Link className="user" to="/login">
          Innskrá
        </Link>
      )}
      <br />
      <Button label = "Nýskrá"/>
    </footer>
  );
}

export default Footer;
