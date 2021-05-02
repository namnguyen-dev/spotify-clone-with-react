export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token:
    'BQANpJMKd736yNRBnRwhB49FQrbvgqMVVcdUvN7pYiK-Q-8vj4Cegw7eUA3dRfIVlMcLqe0M2gZIasUIqjQ05DlgwXrrUCDwwtS50Y9JSyn9C472ljsxD56FaLYaSSQKot6H_yow_fFNs5DyYlr5fWR0Hpl78PA3mrMNvdVmRMeQW3MN',
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

    default:
      return state;
  }
};

export default reducer;
