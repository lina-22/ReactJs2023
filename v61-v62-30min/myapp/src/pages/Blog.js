import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { blogsData } from "../data";

export default function Blog() {
  const { title } = useParams();
  const [bodyData, setBodyData] = useState("");

  useEffect(() => {
    const blogData = blogsData.filter((blog) => blog.title === title);
    setBodyData(blogData[0].body);
  }, []);

  return (
    <div>
      <h1>{title} page</h1>
      <p>{bodyData.slice(0, 200)}</p>
      <p>{bodyData.slice(200, 400)}</p>
      <p>{bodyData.slice(400, 800)}</p>
    </div>
  );
}
