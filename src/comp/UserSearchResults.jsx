import React, { useState } from "react";
import classnames from "classnames";
import RequestCard from "./RequestCard";

export default function UserSearchResults({ results, className }) {
  const [page, setPage] = useState(0);
  const basePageClasses =
    "text-lg font-bold text-secondaryText select-none cursor-pointer mr-3";
  // FIXME: primaryText doesn't work for some reason
  const currentPageClasses = "text-black cursor-default";

  console.log("AAA", page);
  return (
    <div className={className}>
      {/* <div className={`max-w-sm ${className}`}> */}
      <div className="children:not-first:mt-2 mb-3">
        {results.slice(page * 3, page * 3 + 3).map(result => (
          <RequestCard
            key={result.id}
            id={result.id}
            username={result.username}
            firstName={result.firstName}
            lastName={result.lastName}
            avatar={result.avatar}
            handleProfile={result.handleProfile}
            handleAccept={result.handleAccept}
            variant={result.variant}
          />
        ))}
      </div>
      <div className="flex items-center justify-end">
        <p
          className={classnames({
            [basePageClasses]: true,
            [currentPageClasses]: page === 0
          })}
          onClick={() => setPage(0)}
        >
          1
        </p>
        {results.length > 3 && (
          <p
            className={classnames({
              [basePageClasses]: true,
              [currentPageClasses]: page === 1
            })}
            onClick={() => setPage(1)}
          >
            2
          </p>
        )}
        {results.length >= 6 && (
          <p
            className={classnames({
              [basePageClasses]: true,
              [currentPageClasses]: page === 2
            })}
            onClick={() => setPage(2)}
          >
            3
          </p>
        )}
      </div>
    </div>
  );
}
