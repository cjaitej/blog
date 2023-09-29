import tree from "../blog_page_information/ds/tree";
import blogGen from "./blogGenerator";

export default function Tree() {
  const blog = blogGen(tree);
  return <div className="blog">{blog}</div>;
}
