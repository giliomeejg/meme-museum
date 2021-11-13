/* eslint-disable import/prefer-default-export */
export type State = {
  loading: boolean;
  account: null | string;
  provider: null | any;
  self: null | any;
  connectWeb3?: any;
  logout?: any;
};
export const Web3Reducer = (state: State, action: Record<string, any>) => {
  switch (action.type) {
    case "SET_ACCOUNT":
      return {
        ...state,
        account: action.payload,
      };
    case "SET_PROVIDER":
      return {
        ...state,
        provider: action.payload,
      };
    default:
      return state;
  }
};