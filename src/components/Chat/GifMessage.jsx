import React, { useEffect, useState } from "react";

import giphyFetch from "../../helpers/gifConfig";

export default function GifMessage({ gifId }) {
  const [gif, setGif] = useState(null);

  useEffect(() => {
    (async () => {
      const { data } = await giphyFetch.gif(gifId);
      setGif(data);
    })();
  }, [gifId]);

  return (
    <div className="h-32">
      {gif ? (
        <img
          className="h-full"
          src={gif.images.fixed_height_downsampled.url}
          alt={gif.title}
        />
      ) : null}
    </div>
  );
}
