import { GiphyFetch } from "@giphy/js-fetch-api";

const giphyFetch = new GiphyFetch(process.env.REACT_APP_GIPHY_API_KEY);

export default giphyFetch;
