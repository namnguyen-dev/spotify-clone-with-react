export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token:
    'BQA2RiwfuFmp_6jQoHBD4_HQbdGzvcn_o0cm2W53dwCHNzFFgpk4n7afrZzsbAjyl8Fm60OUK-epAhA60nG51MbcIf5doLMlNFelza1IRdDAw1Ktvi-OJKDAdK_tIHizIWDS9zhGwe_mnSK268mBgs0zWYPXSHaXfgB2SiEvCfIZNSwM',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };

    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      };

    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists,
      };

    default:
      return state;
  }
};

export default reducer;
