import Card from "./card";
import datastructures from "./datastructure";
import machinelearning from "./machinelearning";

export default function Home() {
  const ml_card = machinelearning.map((item) => {
    return (
      <Card
        imageurl={item.image}
        name={item.name}
        blogPage={item.blogPage}
      ></Card>
    );
  });

  const ds_card = datastructures.map((item) => {
    return (
      <Card
        imageurl={item.image}
        name={item.name}
        blogPage={item.blogPage}
      ></Card>
    );
  });
  return (
    <div className="Home">
      <h1>Machine Learning</h1>
      <div className="categories">{ml_card}</div>
      <h1>Data Structures</h1>
      <div className="categories">{ds_card}</div>
    </div>
  );
}
