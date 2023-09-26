import { useNavigate } from "react-router-dom";

interface p {
  imageurl: String;
  name: String;
  blogPage: String;
}

export default function Card(props: p) {
  const navigate = useNavigate();
  function handleClick() {
    navigate(props.blogPage.toString());
  }
  return (
    <div onClick={handleClick} className="Card">
      <img src={props.imageurl.toString()} />
      <h1>{props.name}</h1>
    </div>
  );
}
