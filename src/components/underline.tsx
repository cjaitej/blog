interface props {
  name: String;
}

export default function Underline(props: props) {
  return <h1 className="blog--para underline">{props.name}</h1>;
}
