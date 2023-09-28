import blogGen from "./blogGenerator";
import stackandqueue from "../blog_page_information/ds/stackandqueue";

export default function StackandQueue() {
  const blog = blogGen(stackandqueue);
  return <div className="blog">{blog}</div>;
}
