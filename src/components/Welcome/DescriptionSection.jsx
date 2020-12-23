import React from "react";
import strings from "../../helpers/localization";
import DescriptionCard from "./DescriptionCard";

export default function SignupSection({ id }) {
  const formatClassName =
    "flex flex-col w-full justify-center items-center my-8";
  const headerClassName = "text-3xl font-bold text-copy-primary sm:p-12 p-4";
  const sectionClassName =
    "grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 w-full gap-4 gap-y-12 lg:gap-y-16 md:gap-y-12 sm:gap-y-12 py-8 px-0 md:px-20";
  const firstSection = [
    {
      src: "https://i.ibb.co/y5bfPpL/watch-Together.png",
      title: strings.descriptionCardTitle1,
      description: strings.descriptionCardBody1
    },
    {
      src: "https://i.ibb.co/X5BHwwZ/chat.png",
      title: strings.descriptionCardTitle2,
      description: strings.descriptionCardBody2
    },
    {
      src: "https://i.ibb.co/PYv5D1N/public-Channels.png",
      title: strings.descriptionCardTitle3,
      description: strings.descriptionCardBody3
    }
  ];
  const secondSection = [
    {
      src: "https://i.ibb.co/gVvhdM9/binge-Watch.png",
      title: strings.descriptionCardTitle4,
      description: strings.descriptionCardBody4
    },
    {
      src: "https://i.ibb.co/C7qhQdt/internet-Dj.png",
      title: strings.descriptionCardTitle5,
      description: strings.descriptionCardBody5
    },
    {
      src: "https://i.ibb.co/WxrND8X/long-Distance-Relationship.png",
      title: strings.descriptionCardTitle6,
      description: strings.descriptionCardBody6
    },
    {
      src: "https://i.ibb.co/NpwYhK8/hanging-Out.png",
      title: strings.descriptionCardTitle7,
      description: strings.descriptionCardBody7
    },
    {
      src: "https://i.ibb.co/M9HQpqz/your-Own-Channel.png",
      title: strings.descriptionCardTitle8,
      description: strings.descriptionCardBody8
    },
    {
      src: "https://i.ibb.co/KzztpLw/video-Premiere.png",
      title: strings.descriptionCardTitle9,
      description: strings.descriptionCardBody9
    }
  ];

  // === Function to repeat items in each section. `items={array}` === //
  function CardsList({ items }) {
    return items.map(item => (
      <DescriptionCard
        title={item.title}
        src={item.src}
        alt={item.title}
        description={item.description}
        key={item.id}
      />
    ));
  }
  return (
    <div className="flex flex-col w-full bg-background-primary p-4 sm:p-20">
      <div className={formatClassName}>
        <h1 className={headerClassName}>{strings.descriptionHeader1}</h1>
        <div className={sectionClassName}>
          <CardsList items={firstSection} />
        </div>
      </div>
      <div className={formatClassName}>
        <h2 className={headerClassName}>{strings.descriptionHeader2}</h2>
        <div className={sectionClassName}>
          <CardsList items={secondSection} />
        </div>
        <p className="w-full flex justify-end text-copy-secondary text-xs md:px-16">
          Icon made by Freepik from www.flaticon.com
        </p>
      </div>
    </div>
  );
}
