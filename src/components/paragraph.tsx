interface para {
  content: String;
}

export default function Paragraph(props: para) {
  return <h1 className="blog--para">{props.content}</h1>;
}
