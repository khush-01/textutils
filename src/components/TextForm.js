import React, { useState } from "react";

function TextForm(props) {
  const [text, setText] = useState("");

  return (
    <>
      <div
        className={`container text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className={`form-control text-${
              props.mode === "light" ? "dark" : "light"
            }`}
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            id="textBox"
            rows="6"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
            }}
          ></textarea>
        </div>
        <button
          className="btn btn-primary m-1"
          onClick={() => {
            setText(text.toUpperCase());
          }}
          disabled={text.length === 0}
        >
          Convert to Uppercase
        </button>
        <button
          className="btn btn-primary m-1"
          onClick={() => {
            setText(text.toLowerCase());
          }}
          disabled={text.length === 0}
        >
          Convert to Lowercase
        </button>
        <button
          className="btn btn-primary m-1"
          onClick={() => {
            setText(text.split(/[ ]+/).join(" "));
          }}
          disabled={text.length === 0}
        >
          Remove Extra Spaces
        </button>
        <button
          className="btn btn-primary m-1"
          onClick={() => {
            navigator.clipboard.writeText(text);
          }}
          disabled={text.length === 0}
        >
          Copy Text
        </button>
        <button
          className="btn btn-primary m-1"
          onClick={() => {
            setText("");
          }}
          disabled={text.length === 0}
        >
          Clear Text
        </button>
      </div>
      <div
        className={`container my-3 text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <h2>Text Summary</h2>
        <p>
          {text.split(/[^\s]+/).length - 1} words {text.trim().length}{" "}
          characters
        </p>
        <p>
          {text.length
            ? ((text.split(/[^\s]+/).length - 1) * 0.48).toFixed(2)
            : 0}{" "}
          seconds read
        </p>
        <h2>Preview</h2>
        <p>{text.length ? text : "Enter text to preview here"}</p>
      </div>
    </>
  );
}

export default TextForm;
