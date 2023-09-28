import blogGen from "./blogGenerator";
import rnn from "../blog_page_information/machinlearning/rnn";

export default function RNN() {
  const blog = blogGen(rnn);
  return <div className="blog">{blog}</div>;
}
