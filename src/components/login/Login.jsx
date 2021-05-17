import "./Login.css";
import LOGO from "../../ascets/LOGO.png";

function Login() {
  return (
    <div className="login">
      <img src={LOGO} alt="Spotify Logo" />
      <a>SPOTIFY LOGIN</a>
    </div>
  );
}

export default Login;
