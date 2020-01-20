import { SET_API } from "../../../helpers/constants";

export const generalApiLoading = () => ({
  type: SET_API,
  payload: {
    generalApiLoading: true,
    generalApiError: false
  }
});

export const generalApiSuccess = () => ({
  type: SET_API,
  payload: {
    generalApiLoading: false,
    generalApiError: false
  }
});

export const generalApiError = () => ({
  type: SET_API,
  payload: {
    generalApiLoading: false,
    generalApiError: true
  }
});

export const userApiLoading = () => ({
  type: SET_API,
  payload: {
    userApiLoading: true,
    userApiSuccess: false
    // userApiError: false
  }
});

export const userApiSuccess = () => ({
  type: SET_API,
  payload: {
    userApiLoading: false,
    userApiError: false
  }
});

export const userApiSuccess2 = () => ({
  type: SET_API,
  payload: {
    userApiLoading: false,
    userApiError: false,
    userApiSuccess: true
  }
});

export const userApiReset = () => ({
  type: SET_API,
  payload: {
    userApiLoading: false,
    userApiError: false,
    userApiSuccess: false
  }
});

export const userApiError = error => ({
  type: SET_API,
  payload: {
    userApiLoading: false,
    userApiError: error || true,
    userApiSuccess: false
  }
});
export const registrationApiLoading = () => ({
  type: SET_API,
  payload: {
    registrationApiLoading: true
    // registrationApiError: false
  }
});

export const registrationApiSuccess = () => ({
  type: SET_API,
  payload: {
    registrationApiLoading: false,
    registrationApiError: false
  }
});

export const registrationApiError = error => ({
  type: SET_API,
  payload: {
    registrationApiLoading: false,
    registrationApiError: error || true
  }
});

export const userPageApiLoading = () => ({
  type: SET_API,
  payload: {
    userPageApiLoading: true,
    userPageApiError: false
  }
});

export const userPageApiSuccess = () => ({
  type: SET_API,
  payload: {
    userPageApiLoading: false,
    userPageApiError: false
  }
});

export const userPageApiError = error => ({
  type: SET_API,
  payload: {
    userPageApiLoading: false,
    userPageApiError: error || true
  }
});

export const inviteApiLoading = () => ({
  type: SET_API,
  payload: {
    inviteApiLoading: true,
    inviteApiError: false
  }
});

export const inviteApiSuccess = () => ({
  type: SET_API,
  payload: {
    inviteApiLoading: false,
    inviteApiError: false
  }
});

export const inviteApiError = error => ({
  type: SET_API,
  payload: {
    inviteApiLoading: false,
    inviteApiError: error || true
  }
});

export const roomApiLoading = () => ({
  type: SET_API,
  payload: {
    roomApiLoading: true,
    roomApiError: false
  }
});

export const roomApiSuccess = () => ({
  type: SET_API,
  payload: {
    roomApiLoading: false,
    roomApiError: false
  }
});

export const roomApiError = error => ({
  type: SET_API,
  payload: {
    roomApiLoading: false,
    roomApiError: error || true
  }
});

// export const userSearchApiLoading = () => ({
//   type: SET_API,
//   payload: {
//     userSearchApiLoading: true,
//     userSearchApiError: false
//   }
// });

// export const userSearchApiSuccess = () => ({
//   type: SET_API,
//   payload: {
//     userSearchApiLoading: false,
//     userSearchApiError: false
//   }
// });

// export const userSearchApiError = error => ({
//   type: SET_API,
//   payload: {
//     userSearchApiLoading: false,
//     userSearchApiError: error || true
//   }
// });
