import React from "react";
import { useNavigate } from "react-router-dom";
export default function Contact() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Contact page</h1>
      <p>
        hello i am kaisan kaisan, hello i am kaisan kaisan, hello i am kaisan
        kaisan, hello i am kaisan kaisan
      </p>
      <p>
        hello i am kaisan kaisanhello i am kaisan kaisanhello i am kaisan kaisan
        hello i am kaisan kaisan hello i am kaisan kaisan hello i am kaisan
        kaisan hello i am kaisan kaisan hello i am kaisan kaisan hello i am
        kaisan kaisan hello i am kaisan kaisan
      </p>
      <button
        onClick={() => {
          navigate("/");
        }}>
        Go to Home Page
      </button>
    </div>
  );
}
