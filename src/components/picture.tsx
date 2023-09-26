interface picture {
  name: String;
  width: String;
  description: String;
}

interface ArrayPictures {
  array: Array<picture>;
}

export default function Picture(props: ArrayPictures) {
  const picture = props.array.map((item) => {
    return (
      <div className="blog--picture-item">
        <img width={item.width.toString()} src={item.name.toString()} />
        <h1>{item.description.toString()}</h1>
      </div>
    );
  });
  return <div className="blog--picture">{picture}</div>;
}
