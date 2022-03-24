import { useContext } from "react";
import { UserContext } from "../components/auth/UserContext";
import "./styles.css";

function Button ({label, button}) {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      {user ? (
        <button
          className={button}
          onClick={async () => {
            setUser(null);
          }}
        >
          Útskrá
        </button>
      ) : (
        <button
          className={button}
          onClick={async () => {
            setUser("Módúlus");
          }}
        >
          {label}
        </button>
      )}
      <br />
    </>
  );
};

export default Button;
