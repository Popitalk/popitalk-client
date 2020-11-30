// import CrunchyrollLogo from "../assets/sources/crunchyroll-logo.png";
// import GfycatLogo from "../assets/sources/gfycat-logo.png";

export const DEFAULT_SOURCE = "Youtube";

const sources = [
  { source: "Youtube", icon: ["fab", "youtube"], active: true },
  { source: "Twitch", icon: ["fab", "twitch"], active: false },
  { source: "Instagram", icon: ["fab", "instagram"], active: false },
  { source: "Facebook", icon: ["fab", "facebook"], active: false },
  { source: "Spotify", icon: ["fab", "spotify"], active: false },
  { source: "Tiktok", icon: ["fab", "tiktok"], active: false }
  // { source: "Crunchyroll", icon: CrunchyrollLogo, active: false },
  // { source: "Gfycat", icon: GfycatLogo, active: false },
];

export default sources;
