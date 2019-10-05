interface AuthState {
  authError: null | string;
}

const initState: AuthState = {
  authError: null
};

export const authReducer = (
  state: AuthState = initState,
  action: { type: string }
) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("login error");
      return {
        ...state,
        authError: "Login failed"
      };
    case "LOGIN_SUCCESS":
      console.log("login success");
      return {
        ...state,
        authError: null
      };
    default:
      return state;
  }
};
