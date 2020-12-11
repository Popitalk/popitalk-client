require("babel-register")({
  presets: ["es2015", "react"]
});

const router = require("./sitemap-routes").default;
const Sitemap = require("react-router-sitemap").default;

const AWSAmplify = require("aws-amplify");
const Amplify = AWSAmplify.default;
const API = AWSAmplify.API;
const config = require("./sitemap-config").default;

Amplify.configure({
  API: {
    endpoints: [
      {
        name: "channels",
        endpoint: config.apiGateway.URL
      }
    ]
  }
});

async function generateSitemap() {
  try {
    const { channels } = await API.get("channels", "/channels/trending");
    const channelId = Object.keys(channels);

    const paramsConfig = {
      "/channels/:channelId/video": [{ channelId }]
    };

    return new Sitemap(router)
      .applyParams(paramsConfig)
      .build("https://popitalk.com")
      .save("./public/sitemap.xml");
  } catch (e) {
    console.log(e);
  }
}

generateSitemap();
