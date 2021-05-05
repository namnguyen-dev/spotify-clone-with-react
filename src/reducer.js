export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  discover_weekly: null,
  spotify:null,
  top_artists:null,
  token: null,
  // 'BQA2RiwfuFmp_6jQoHBD4_HQbdGzvcn_o0cm2W53dwCHNzFFgpk4n7afrZzsbAjyl8Fm60OUK-epAhA60nG51MbcIf5doLMlNFelza1IRdDAw1Ktvi-OJKDAdK_tIHizIWDS9zhGwe_mnSK268mBgs0zWYPXSHaXfgB2SiEvCfIZNSwM',
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

    case 'SET_DISCOVER_WEEKLY':
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case 'SET_PLAYING':
      return {
        ...state,
        playing: action.playing,
      };

    case 'SET_ITEM':
      return {
        ...state,
        item: action.item,
      };

    case 'SET_TOP_ARTISTS':
      return {
        ...state,
        top_artists: action.top_artists,
      };

    case 'SET_SPOTIFY':
      return {
        ...state,
        spotify: action.spotify,
      };

    default:
      return state;
  }
};

export default reducer;
