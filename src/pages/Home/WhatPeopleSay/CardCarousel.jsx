import React from "react";

const CardCarousel = () => {
  return (
    <div className=" bg-slate-100 w-full h-96 rounded-2xl flex items-center justify-center flex-col gap-5">
      <div className="avatar">
        <div className="w-24 mask mask-squircle">
          <img src={ppl2} />
        </div>
      </div>
      <h3 className=" font-semibold text-2xl">Ramsy Bolton</h3>
      <p>
        I have been able to use toy Cars to research exactly what car I want, in
        what trim and average prices for it. It's a great tool to have available
        to me.
      </p>
    </div>
  );
};

export default CardCarousel;
