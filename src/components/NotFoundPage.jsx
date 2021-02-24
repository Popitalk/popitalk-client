import React from "react";
import strings from "../localization/strings";

const NotFoundPage = () => (
  <div className="flex flex-col md:flex-row px-12 items-center justify-center w-full h-full bg-background-secondary">
    <div className="flex items-center justify-center md:w-1/2 w-full p-4 lg:px-12 xl:p-24">
      <video
        className="flex object-cover rounded-circle"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={strings.adVideo} type="video/mp4" />
      </video>
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
