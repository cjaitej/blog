interface props {
  name: String;
  link: String;
}

export default function Link(props: props) {
  function handleClick() {
    window.open(props.link.toString());
  }
  return (
    <h1 className="link" onClick={handleClick}>
      {props.name}
    </h1>
  );
}
