import React from "react";
import strings from "../../localization/strings";
import Spinner from "../Spinner";
import Button from "./Button";

const LoadMoreButton = ({
  channelStatus,
  isLoadMore,
  handleLoadMore,
  recommendedView
}) =>
  channelStatus === "loading" ? (
    <Spinner />
  ) : isLoadMore ? (
    <div
      className={`${
        recommendedView ? "p-12" : "p-4"
      } flex justify-center items-center`}
    >
      {recommendedView && (
        <div className="h-px bg-background-quaternary w-full mx-2" />
      )}
      <Button
        actionButton
        leftIcon="arrow-down"
        size="sm"
        hoverable
        className={`${
          recommendedView
            ? "text-copy-highlight bg-background-primary"
            : "text-copy-secondary bg-background-secondary"
        }  text-sm font-bold flex-shrink-0 space-x-2`}
        onClick={handleLoadMore}
      >
        {strings.loadMoreButton}
      </Button>
      {recommendedView && (
        <div className="h-px bg-background-quaternary w-full mx-2" />
      )}
    </div>
  ) : null;

export default LoadMoreButton;
