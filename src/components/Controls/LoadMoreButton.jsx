import React from "react";
import strings from "../../helpers/localization";
import Spinner from "../Spinner";
import Button from "./Button";

const LoadMoreButton = ({ channelStatus, isLoadMore, handleLoadMore }) =>
  channelStatus === "loading" ? (
    <Spinner />
  ) : isLoadMore ? (
    <div className="flex justify-center items-center p-12">
      <div className="h-px bg-background-quaternary w-full mx-2" />
      <Button
        actionButton
        leftIcon="arrow-down"
        size="sm"
        hoverable
        className="bg-background-primary text-copy-highlight text-sm font-bold flex-shrink-0 space-x-2"
        onClick={handleLoadMore}
      >
        {strings.loadMoreButton}
      </Button>
      <div className="h-px bg-background-quaternary w-full mx-2" />
    </div>
  ) : null;

export default LoadMoreButton;
