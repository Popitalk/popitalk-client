import React, { useState } from "react";
import VideoSources from "../VideoSources";
import Input6 from "../Input6";
import YoutubeLogo from "../../assets/youtube-logo.png";
import VimeoLogo from "../../assets/vimeo-logo.png";
import CrunchyrollLogo from "../../assets/crunchyroll-logo.png";
import TwitchLogo from "../../assets/twitch-logo.png";
import InstagramLogo from "../../assets/instagram-logo.png";
import HuluLogo from "../../assets/hulu-logo.png";
import GfycatLogo from "../../assets/gfycat-logo.png";
import FacebookLogo from "../../assets/facebook-logo.png";
import DailymotionLogo from "../../assets/dailymotion-logo.png";
import TwitterLogo from "../../assets/twitter-logo.png";
import SpotifyLogo from "../../assets/spotify-logo.png";
import "./SearchSource.css";

const sources = [
  {
    source: "Youtube",
    icon: YoutubeLogo
  },
  {
    source: "Vimeo",
    icon: VimeoLogo
  },
  {
    source: "Crunchyroll",
    icon: CrunchyrollLogo
  },
  {
    source: "Twitch",
    icon: TwitchLogo
  },
  {
    source: "Instagram",
    icon: InstagramLogo
  },
  {
    source: "Hulu",
    icon: HuluLogo
  },
  {
    source: "Gfycat",
    icon: GfycatLogo
  },
  {
    source: "Facebook",
    icon: FacebookLogo
  },
  {
    source: "Dailymotion",
    icon: DailymotionLogo
  },
  // {
  //   source: "Twitter",
  //   icon: TwitterLogo
  // },
  {
    source: "Spotify",
    icon: SpotifyLogo
  }
];
export default function SearchSource() {
  const [search, setSearch] = useState("");
  const [source, setSource] = useState("Youtube");

  const handleSubmit = () => {
    setSearch("");
  };

  return (
    <div className="SearchSource--container">
      <div>
        <button type="button" className="button round">
          <i className="fas fa-fire fa-lg" />
        </button>
        <div className="SearchSource--input">
          <input
            type="text"
            // name={name}
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder={`Search for a ${source} video`}
            onKeyDown={e => {
              if (e.keyCode === 13) {
                handleSubmit();
              }
            }}
            // disabled={disabled}
            spellCheck={false}
          />
          <img
            src={sources.find(s => s.source === source).icon}
            alt={`${source} icon`}
          />
          <button type="button" className="button round" onClick={handleSubmit}>
            <i className="fas fa-search" />
          </button>
        </div>
      </div>
      <VideoSources
        sources={sources}
        source={source}
        setSource={s => setSource(s)}
      />
    </div>
  );
}
