interface tittle {
  name: String;
  date: String;
}

export default function Tittle(props: tittle) {
  return (
    <div className="blog--tittle">
      <h1 className="blog--tittle-name">{props.name}</h1>
      <h1 className="blog--tittle-date">Posted on {props.date}</h1>
    </div>
  );
}
