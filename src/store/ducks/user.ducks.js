import * as Service from '../../services/user.service';

const resource = 'USER';

const TYPES = {
  SET_USER: `SET_${resource}`,
  SET_LOADING: `SET_LOADING_${resource}`,
  SET_AUTHENTICATE: `SET_AUTHENTICATE_${resource}`,
  SET_ERROR: `SET_ERROR_${resource}`,
  REMOVE: `REMOVE_${resource}`,
};

const INITIAL_STATE = {
  user: {},
  error: '',
  authenticate: false,
  loading: false,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.SET_USER:
      return { ...state, user: action.payload };
    case TYPES.SET_LOADING:
      return { ...state, loading: action.payload };
    case TYPES.SET_AUTHENTICATE:
      return { ...state, authenticate: action.payload };
    case TYPES.SET_ERROR:
      return { ...state, error: action.payload };
    case TYPES.REMOVE:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export const userActions = {
  getUser: (idUser) => async (dispatch) => {
    dispatch({ type: TYPES.SET_LOADING, payload: true });
    try {
      const user = await Service.getUser(idUser);
      dispatch({ type: TYPES.SET_USER, payload: user });
    } catch (error) {
      dispatch({ type: TYPES.SET_ERROR, payload: error });
    }
    dispatch({ type: TYPES.SET_LOADING, payload: false });
  },
  setUser: (user) => (dispatch) => {
    dispatch({ type: TYPES.SET_USER, payload: user });
    dispatch({ type: TYPES.SET_LOADING, payload: false });
  },
  setLoading: (value) => (dispatch) => {
    dispatch({ type: TYPES.SET_LOADING, payload: value });
  },
  setAuthenticate: (value) => (dispatch) => {
    dispatch({ type: TYPES.SET_AUTHENTICATE, payload: value });
  },
  removeUser: () => (dispatch) => {
    dispatch({ type: TYPES.REMOVE });
  },
};
