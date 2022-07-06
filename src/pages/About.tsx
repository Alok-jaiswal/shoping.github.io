import React, { useState } from "react";
import Form from "../components/about/Form";
import Form2 from "../components/about/Form2";

export const About = () => {
  const [showForm,setShowForm] = useState(false);
  return (
    <>
      <div>About us </div>
      <p className="m-2">
        9 mins Thumbnail [100%x225] This is a wider card with supporting text
        below as a natural lead-in to additional content. This content is a
        little bit longer. 9 mins Thumbnail [100%x225] This is a wider card with
        supporting text below as a natural lead-in to additional content. This
        content is a little bit longer. 9 mins{" "}
      </p>
      <div>For more Info. </div><button onClick={()=>setShowForm(showForm === true ?false:true)}>Get More...</button>
      {showForm && <Form />}
      <Form2/>
      <p className="m-2">
        {" "}
        Album example is © Bootstrap, but please download and customize it for
        yourself! New to Bootstrap? Visit the homepage or read our getting
        started guide.
      </p>
    </>
  );
};
