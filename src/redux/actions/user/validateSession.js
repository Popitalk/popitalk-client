import * as api from "../../../helpers/api";
import {
  SET_USER_INFO,
  SITE_VERSION,
  LOGOUT,
  GENERAL_INIT
} from "../../../helpers/constants";

const validateSession = () => {
  return async dispatch => {
    try {
      const cachedSiteVersion = localStorage.getItem("siteVersion");
      if (cachedSiteVersion) {
        const siteVersionArr = SITE_VERSION.split(".");
        const cachedSiteVersionArr = cachedSiteVersion.split(".");

        if (
          siteVersionArr[0] > cachedSiteVersionArr[0] ||
          siteVersionArr[1] > cachedSiteVersionArr[1] ||
          siteVersionArr[2] > cachedSiteVersionArr[2]
        ) {
          localStorage.clear();
        }
      }
      localStorage.setItem("siteVersion", SITE_VERSION);

      const cachedDrafts = JSON.parse(localStorage.getItem("drafts"));
      let reformedDrafts;

      const response = await api.validateSession();
      dispatch({
        type: SET_USER_INFO,
        payload: {
          id: response.data.id,
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          username: response.data.username,
          dateOfBirth: response.data.dateOfBirth,
          avatar: response.data.avatar,
          email: response.data.email,
          emailVerified: response.data.emailVerified,
          friends:
            response.data.relationships && response.data.relationships.friends,
          sentFriendRequests:
            response.data.relationships &&
            response.data.relationships.sentFriendRequests,
          receivedFriendRequests:
            response.data.relationships &&
            response.data.relationships.receivedFriendRequests,
          blocked:
            response.data.relationships && response.data.relationships.blocked,
          blockers:
            response.data.relationships && response.data.relationships.blockers
        }
      });

      if (cachedDrafts) {
        if (!response.data.channels) {
          reformedDrafts = {};
        } else {
          reformedDrafts = {
            ...cachedDrafts
          };

          const channelIds = Object.keys(response.data.channels);

          Object.keys(reformedDrafts).forEach(channelId => {
            if (!channelIds.includes(channelId)) {
              delete reformedDrafts[channelId];
            }
          });
        }
      }

      dispatch({
        type: GENERAL_INIT,
        payload: {
          channels: response.data.channels || {},
          users: response.data.users || {},
          drafts: reformedDrafts || {}
        }
      });
    } catch (error) {
      localStorage.removeItem("userState");
      dispatch({ type: LOGOUT });
    }
  };
};

export default validateSession;
