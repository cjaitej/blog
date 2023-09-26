interface props {
  name: String;
}

export default function Heading(props: props) {
  return <h1 className="blog--heading">{props.name}</h1>;
}
