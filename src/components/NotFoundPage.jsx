import React from "react";
import welcomepic from "../assets/welcomepic.png";

const NotFoundPage = () => (
  <div className="flex p-12 items-center justify-center w-full h-full bg-background-secondary">
    <div className="absolute md:static opacity-0 sm:opacity-25 md:opacity-100 md:flex items-center justify-center md:w-1/2 w-full h-full lg:p-24 md:p-12 sm:p-4">
      <img
        src={welcomepic}
        className="object-cover"
        alt="Watch movies and shows together"
      />
    </div>
    <div className="flex flex-col items-start">
      <h2 className="text-6xl font-bold text-copy-primary">Oops!</h2>
      <h3 className="text-xl text-copy-secondary">
        It looks like the page doesn&rsquo;t exist — Please check the URL or try
        refreshing.
      </h3>
      <h4 className="text-lg font-bold text-copy-secondary mt-4">
        Error Code: 404
      </h4>
    </div>
  </div>
);

export default NotFoundPage;
