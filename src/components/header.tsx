import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  function blogOnclick() {
    navigate("/");
  }

  function aboutOnclick() {
    navigate("/about");
  }

  function contactOnclick() {
    navigate("/contact");
  }

  return (
    <div className="header">
      <h1>Choudam Jaitej's</h1>
      <h2 className="header--blog">blog</h2>
      <div className="header--col">
        <h1 onClick={blogOnclick} className="header--col-item">
          Blogs
        </h1>
        <h1 onClick={aboutOnclick} className="header--col-item">
          About
        </h1>
        <h1 onClick={contactOnclick} className="header--col-item">
          Contact
        </h1>
      </div>
    </div>
  );
}
