import blogGen from "./blogGenerator";
import linkedlist from "../blog_page_information/ll";

export default function LL() {
  const blog = blogGen(linkedlist);
  return <div className="blog">{blog}</div>;
}
