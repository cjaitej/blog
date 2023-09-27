interface props {
  name: String;
}

export default function Heading1(props: props) {
  return <h1 className="heading1">{props.name}</h1>;
}
