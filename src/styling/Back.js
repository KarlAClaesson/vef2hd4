import { Link } from "react-router-dom";
import "./styles.css";

function Back() {
  return(
    <div>
      <Link className="link" to="/">
        Til baka
      </Link>
    </div>
  )
}


export default Back;
