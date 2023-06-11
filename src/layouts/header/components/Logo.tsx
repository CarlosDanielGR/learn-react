import logo from "./../../../assets/docker-icon.svg";
import "./../styles/Logo.scss";

function Logo() {
  return (
    <figure className="logo">
      <img src={logo} alt="Logo" />
    </figure>
  );
}

export default Logo;
