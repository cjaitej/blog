import Tittle from "../tittle";
import Heading from "../heading";
import Paragraph from "../paragraph";
import Picture from "../picture";
import Heading1 from "../heading1";
import Underline from "../underline";

export default function blogGen(props: Array<Array<String | String[]>>) {
  return props.map((item) => {
    if (item[0] == "tittle") {
      return <Tittle name={item[1][0]} date={item[1][1]} />;
    } else if (item[0] == "heading") {
      return <Heading name={item[1][0]}></Heading>;
    } else if (item[0] == "para") {
      return <Paragraph content={item[1][0]}></Paragraph>;
    } else if (item[0] == "picture") {
      return (
        <Picture
          array={[
            { name: item[1][0], width: item[1][1], description: item[1][2] },
          ]}
        ></Picture>
      );
    } else if (item[0] == "heading1") {
      return <Heading1 name={item[1][0]}></Heading1>;
    } else if (item[0] == "underline") {
      return <Underline name={item[1][0]}></Underline>;
    }
  });
}
