import React from "react";
import strings from "../../helpers/localization";
import DescriptionCard from "./DescriptionCard";

export default function SignupSection({ id }) {
  return (
    <div className="w-full h-auto bg-gradient-r-primary pb-8">
      <div className="flex flex-col w-full h-full bg-background-primary shadow-lg rounded-b-lg sm:p-20 p-4">
        <div className="flex flex-col w-full justify-center items-center my-8">
          <h1 className="text-3xl font-bold text-copy-primary sm:p-12 p-4">
            {strings.descriptionHeader1}
          </h1>
          <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 w-full gap-4 gap-y-12 lg:gap-y-16 md:gap-y-12 sm:gap-y-12 py-8 px-0 md:px-20">
            <DescriptionCard
              title={strings.descriptionCardTitle1}
              src="https://i.ibb.co/y5bfPpL/watch-Together.png"
              alt={strings.descriptionCardTitle1}
              description={strings.descriptionCardBody1}
            />
            <DescriptionCard
              title={strings.descriptionCardTitle2}
              src="https://i.ibb.co/X5BHwwZ/chat.png"
              alt={strings.descriptionCardTitle2}
              description={strings.descriptionCardBody2}
            />
            <DescriptionCard
              title={strings.descriptionCardTitle3}
              src="https://i.ibb.co/PYv5D1N/public-Channels.png"
              alt={strings.descriptionCardTitle3}
              description={strings.descriptionCardBody3}
            />
          </div>
        </div>
        <div className="flex flex-col w-full justify-center items-center my-8 mb-20">
          <h2 className="text-3xl font-bold text-copy-primary sm:p-12 p-4">
            {strings.descriptionHeader2}
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 w-full gap-4 gap-y-12 lg:gap-y-16 md:gap-y-12 sm:gap-y-12 p-8 px-0 md:px-20">
            <DescriptionCard
              title={strings.descriptionCardTitle4}
              src="https://i.ibb.co/gVvhdM9/binge-Watch.png"
              alt={strings.descriptionCardTitle4}
              description={strings.descriptionCardBody4}
            />
            <DescriptionCard
              title={strings.descriptionCardTitle5}
              src="https://i.ibb.co/C7qhQdt/internet-Dj.png"
              alt={strings.descriptionCardTitle5}
              description={strings.descriptionCardBody5}
            />
            <DescriptionCard
              title={strings.descriptionCardTitle6}
              src="https://i.ibb.co/WxrND8X/long-Distance-Relationship.png"
              alt={strings.descriptionCardTitle6}
              description={strings.descriptionCardBody6}
            />
            <DescriptionCard
              title={strings.descriptionCardTitle7}
              src="https://i.ibb.co/NpwYhK8/hanging-Out.png"
              alt={strings.descriptionCardTitle7}
              description={strings.descriptionCardBody7}
            />
            <DescriptionCard
              title={strings.descriptionCardTitle8}
              src="https://i.ibb.co/M9HQpqz/your-Own-Channel.png"
              alt={strings.descriptionCardTitle8}
              description={strings.descriptionCardBody8}
            />
            <DescriptionCard
              title={strings.descriptionCardTitle9}
              src="https://i.ibb.co/KzztpLw/video-Premiere.png"
              alt={strings.descriptionCardTitle9}
              description={strings.descriptionCardBody9}
            />
          </div>
          <p className="w-full h-auto flex justify-end text-copy-secondary text-sm px-0 md:px-16">
            Icon made by Freepik from www.flaticon.com
          </p>
        </div>
      </div>
    </div>
  );
}
