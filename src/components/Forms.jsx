import React, { useState } from "react";
function Forms(props) {
  const [text, SetText] = useState("Enter your text here"); //creation of States

  function clickUp() {
    let UpperCaseText = text.toUpperCase();
    SetText(UpperCaseText);
  }

  function handleOnChange(event) {
    SetText(event.target.value); //this helps to add all the text input into the set text
  }

  function clickDown() {
    let lowertext = text.toLowerCase();
    SetText(lowertext);
  }

  function clickAll() {
    let txt = " ";
    SetText(txt);
  }

  function CopyAll() {
    var txt = text;
    navigator.clipboard.writeText(txt);
  }
  return (
    <>
      <div className="mb-3 container-1">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          <h3>{props.heading}</h3>
        </label>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <button type="button" className="btn btn-primary" onClick={clickUp}>
        Convert to Uppercase
      </button>

      <button type="button" className="btn btn-primary mx-3" onClick={clickDown}>
        Convert to LowerCase
      </button>

      <button type="button" className="btn btn-primary mx-1" onClick={clickAll}>
        Clear All Text
      </button>

      <button type="button" className="btn btn-primary mx-3" onClick={CopyAll}>
        Copy Text
      </button>

      <div className="container-2 my-4">
        <h1>
          {" "}
          <bold>Your Text Summary</bold>{" "}
        </h1>
        <p>
          {
            text.split(" ").length
          }words and {text.length} characters <br />
          {0.008 * text.split(" ").length} Minutes Read
        </p>
        <p>
          <h2>
            <bold>Preview</bold>
          </h2>

          <p>{text}</p>
        </p>
      </div>
    </>
  );
}
export default Forms;
