import React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/Mission.json";
import "./hackinfo.css";


function Mission() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="z-10 w-screen flex justify-center items-center py-16">
        
      <div className="rounded-xl  max-lg:w-[80%] w-[60%] max-lg:p-8 p-14 border-2 border-white text-white">
      <h1 className="text-5xl text-center font-heading pb-5 font-bold">Our Mission</h1>
<div className="flex max-lg:flex-col-reverse flex-row gap-10">
<div className="content  flex flex-col items-start justify-center gap-10">
            <p className="font-content font-light text-base">
            Our mission is simple yet profound: to challenge participants to harness their creativity, coding skills, and teamwork to solve real-world problems. We believe in the transformative power of collaboration and coding, and we aim to inspire the next generation of tech leaders.

            </p>

        </div>
        <div className="gif flex  items-center justify-center">
          <Lottie
            options={defaultOptions}
            height={300} // Adjust height as needed
            width={300} // Adjust width as needed
          />
        </div>
</div>
      </div>
    </div>
  );
}

export default Mission;
