import {
  FETCH_FOLDER_REQUEST,
  FETCH_FOLDER_SUCCESS,
  FETCH_FOLDER_FAILURE
} from '../constants/folder-constants';

// Data / Async
function dmFolderReducer(state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) {
  switch (action.type) {
  case FETCH_FOLDER_REQUEST:
    return Object.assign({}, state, {
      isFetching: true,
      didInvalidate: false
    });
  case FETCH_FOLDER_SUCCESS:
    return Object.assign({}, state, {
      isFetching: false,
      didInvalidate: false,
      items: action.folder,
      lastUpdated: action.receivedAt
    });
  case FETCH_FOLDER_FAILURE:
    return Object.assign({}, state, {
      didInvalidate: true,
      error: action.error
    });
  default:
    return state;
  }
}


export default dmFolderReducer;
