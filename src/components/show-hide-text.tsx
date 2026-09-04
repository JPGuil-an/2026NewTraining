import { useState, useEffect } from "react";

export default function ShowHideText() {

  const [isShow, setIsShow] = useState(false);

  const handleClick = () => {
    setIsShow(!isShow);
  }

  return (
    <div>
      <button onClick={handleClick}>
        {isShow ? "Click to Hide Text" : "Click to Show Text"}
      </button>
      {isShow ? <ShowText /> : <HideText />}  
    </div>

  )
}

function HideText() {
  useEffect(() => {
    console.log("Hide Text is mounted");
    return () => {
      console.log("Hide Text is unmounted");
    };
  }, []);
  return <p>Text is hidden</p>;
}

function ShowText() {
  useEffect(() => {
    console.log("Show Text is mounted");
    return () => {
      console.log("Show Text is unmounted");
    };
  }, []);
  return <p>Hello, this is the text!</p>;
}