import React from "react";
import Tour from "../assets/tour2.jpg";

function About() {
  return (
    <div className="w-screen h-screen bg-white">
      <div className="w-full max-w-screen-xl">
        <img
          src={Tour}
          alt=""
          className="w-full h-60 object-cover  object-bottom"
        />
      </div>
      <div className="px-10 pb-3">
        <div className="text-black ">
          <h1 className="text-2xl font-bold py-5">This is the heading</h1>
          <p>
            In this example: I've wrapped the img tag with a div container to
            provide better control over its dimensions. The object-cover class
            will make sure the image covers the entire container while
            maintaining its aspect ratio. The object-center class will ensure
            the image is centered within the container. Adjust the height and
            width of the container and image (h-96 class in this case) according
            to your specific requirements.
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default About;
