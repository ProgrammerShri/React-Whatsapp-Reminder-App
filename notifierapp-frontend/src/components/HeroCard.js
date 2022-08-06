import React from "react";
import AppButton from "./Basics/AppButton";
import AppInput from "./Basics/AppInput";
import AppTextArea from "./Basics/AppTextArea";

const HeroCard = () => {
  return (
    <div className="w-full mt-4 flex justify-center items-center">
      <div className="h-auto w-fit p-3 m-2 rounded-xl bg-tertiary flex flex-col  justify-center items-center">
        <h1 className="text-white text-xl text-center">
          Hey! Remind Me Anything, Then I'll Remind You Again
        </h1>
        <AppTextArea />
        <AppButton />
      </div>
    </div>
  );
};

export default HeroCard;
