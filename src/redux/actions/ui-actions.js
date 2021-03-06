import {
  WINDOW_DIMENSIONS,
  TOGGLE_LEFT_SIDEBAR,
  TOGGLE_RIGHT_SIDEBAR,
  TOGGLE_MODAL,
  CHANGE_FOLDER,
  SELECT_FILE,
  SET_FILE_MANAGER_DATA,
  SET_CONTENT_AREA_VIEW,
  SET_RIGHT_PANEL_AREA_VIEW,
  SET_MODAL_VIEW,
  SET_FIREBASE_URL,
  IFRAME_SOURCE,
  SEARCHING_FOR,
  SET_DEV_MODE
} from '../constants/ui-constants';


// UI - Sync Action creators
export function getWindowDimensions(value) {
  return { type: WINDOW_DIMENSIONS, value };
}

export function toggleLeftSidebar(value) {
  return { type: TOGGLE_LEFT_SIDEBAR, value };
}

export function toggleRightSidebar(value) {
  return { type: TOGGLE_RIGHT_SIDEBAR, value };
}

export function toggleModal(value) {
  return { type: TOGGLE_MODAL, value };
}

export function changeFolder(id) {
  return { type: CHANGE_FOLDER, id};
}

export function selectFile(value) {
  return { type: SELECT_FILE, value };
}

export function setFileManagerData(dataMaster, dataFolders, dataFiles) {
  return { type: SET_FILE_MANAGER_DATA, dataMaster, dataFolders, dataFiles};
}

export function setContentAreaView(value) {
  return { type: SET_CONTENT_AREA_VIEW, value };
}

export function setRightPanelAreaView(value) {
  return { type: SET_RIGHT_PANEL_AREA_VIEW, value };
}

export function setModalView(value) {
  return { type: SET_MODAL_VIEW, value };
}

export function setFirebaseUrl(value) {
  return { type: SET_FIREBASE_URL, value };
}

export function changeFrameSource(value) {
  return { type: IFRAME_SOURCE, value };
}

export function changeSearchingFor(value) {
  return { type: SEARCHING_FOR, value };
}

export function setDevMode(value) {
  return { type: SET_DEV_MODE, value };
}
