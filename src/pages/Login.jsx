import { FaUser, FaLock } from "react-icons/fa";
import "../styles/login.css";
import { TypeAnimation } from "react-type-animation";

const LoginPage = () => {
  return (
    <div className="container">
      <h1>
        <TypeAnimation
          sequence={[
            "Welcome to StyleWorld 👗",
            1000,
            "Discover Trendy Outfits ✨",
            1000,
            "Shop Now 🛒",
            1000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </h1>
      <div className="form">
        <h2>login</h2>
        <div className="inpcont">
          <div className="icon">
            <FaUser size={20} color="#fefae0" />
          </div>
          <input type="email" placeholder="email@example.com"/>
        </div>
        <div className="inpcont">
          <div className="icon">
            <FaLock size={20} color="#fefae0" />
          </div>
          <input type="password" placeholder="*****"/>
        </div>
        <p>forgot password?</p>
        <button>login</button>
      </div>
    </div>
  );
};
export default LoginPage;
