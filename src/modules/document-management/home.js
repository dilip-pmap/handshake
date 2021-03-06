// Dependencies.
import React from 'react';
import { connect } from 'react-redux';

// Actions.
import {
  setContentAreaView,
  toggleRightSidebar,
  setRightPanelAreaView,
  toggleModal,
  setModalView
} from '../../redux/actions/ui-actions';


// Constants.
import {
  DEFAULT,
  PREVIEW,
  UPLOAD,
  ACTIVITY,
  // DETAIL,
  // DETAILFORM,
  // VIEWER_CHANGE_REQUEST,
  // APPROVE_CHANGE_REQUEST,
  // APPROVAL_WORKFLOW,
  SEARCH_RESULTS,
  // TOGGLE_RIGHT_SIDEBAR,
  // SHARE,
  CHECKIN,
  CHECKOUT
  // DOWNLOAD,
  // UPLOAD_NEW_VERSION,
  // RELEASE_NOTIFICATION,
  // PERIODIC_REVIEW,
  // DATAGRID
} from '../../redux/constants/ui-constants';

// Core components.
import { DropdownButton, MenuItem } from 'react-bootstrap';

// Layouts.
import Main from '../../layouts/main';

import ContentArea from './content-area';
import RightPanelArea from './right-panel-area';
import ModalArea from './modal-area';

import Info from '../../components/Info';


// Utility methods.
import utils from '../../utils';

// Define class.
class Page extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);

    // Set page title.
    utils.title(props);
  }

  // componentWillReceiveProps(nextProps) {
  //   const { state, dispatch } = nextProps;
  //
  //   const token = state.global.authorizationToken;
  //   const consumerId = state.global.consumerId;
  //   // Async action sample.
  //   // dispatch(fetchFolder('7059a989-f85b-4193-ac32-a485024e4ea4', token, consumerId));
  //   // dispatch(fetchFolder('root', token, consumerId));
  // }

  componentDidMount() {
    const { dispatch } = this.props;

    // Set initial state.
    dispatch(setContentAreaView(DEFAULT));
    dispatch(setRightPanelAreaView(ACTIVITY));
    dispatch(toggleModal(false));
  }

  handleContentButtonClick(view) {
    const { dispatch } = this.props;
    dispatch(setContentAreaView(view));
  }

  handleRightPanelButtonClick(view) {
    const { dispatch } = this.props;
    dispatch(setRightPanelAreaView(view));
  }

  handleModalToggle(view) {
    const { dispatch } = this.props;
    dispatch(setModalView(view));
    dispatch(toggleModal(true));
  }

  handleRightSidePanelToggle() {
    const { state, dispatch } = this.props;
    dispatch(toggleRightSidebar(state.ui.rightSidebarOpened));
  }

  // Render method.
  render() {
    const { state } = this.props;
    // console.log('state:', state);
    const dev = state.ui.devMode;

    return (
      <div>
        <Main>

          {/* Column wrapper. */}
          <div className={ state.ui.rightSidebarOpened ? 'main-col-wrapper sidebar--open clearfix' : 'main-col-wrapper sidebar--closed clearfix' }>

            {/* Left (Main) column. */}
            <div className="main-col main-col-left">

              <div style={{ display: 'none', padding: '20px 20px 0', marginBottom: -10 }}>

                <DropdownButton id="tempNavigationDropdown" bsSize="xs" title=" Temporary Navigation">
                  <MenuItem onClick={this.handleContentButtonClick.bind(this, DEFAULT)}> Default </MenuItem>
                  <MenuItem onClick={this.handleContentButtonClick.bind(this, PREVIEW)}> Preview </MenuItem>
                  <MenuItem onClick={this.handleContentButtonClick.bind(this, UPLOAD)}> Upload </MenuItem>
                  <MenuItem onClick={this.handleContentButtonClick.bind(this, SEARCH_RESULTS)}> Search Results </MenuItem>
                  <MenuItem className="divider" />
                  {/*
                    <MenuItem onClick={this.handleRightPanelButtonClick.bind(this, ACTIVITY)}> Activity List</MenuItem>
                    <MenuItem onClick={this.handleRightPanelButtonClick.bind(this, DETAIL)}> Detail </MenuItem>
                    <MenuItem onClick={this.handleRightPanelButtonClick.bind(this, DETAILFORM)}> Detail Form </MenuItem>
                    <MenuItem onClick={this.handleRightPanelButtonClick.bind(this, RELEASE_NOTIFICATION)}> Release Notification </MenuItem>
                    <MenuItem onClick={this.handleRightPanelButtonClick.bind(this, VIEWER_CHANGE_REQUEST)}> Change Request </MenuItem>
                    <MenuItem onClick={this.handleRightPanelButtonClick.bind(this, APPROVE_CHANGE_REQUEST)}> Approve Change Request </MenuItem>
                    <MenuItem onClick={this.handleRightPanelButtonClick.bind(this, APPROVAL_WORKFLOW)}> Approval Workflow </MenuItem>
                    <MenuItem onClick={this.handleRightPanelButtonClick.bind(this, PERIODIC_REVIEW)}> Periodic Review </MenuItem>
                    <MenuItem className="divider" />
                  */}
                  <MenuItem onClick={this.handleModalToggle.bind(this, CHECKIN)}>Check In</MenuItem>
                  <MenuItem onClick={this.handleModalToggle.bind(this, CHECKOUT)}>Check Out</MenuItem>
                  {/*
                    <MenuItem onClick={this.handleModalToggle.bind(this, DOWNLOAD)}>Download</MenuItem>
                    <MenuItem onClick={this.handleModalToggle.bind(this, UPLOAD_NEW_VERSION)}>Upload New Version</MenuItem>
                    <MenuItem className="divider" />
                    <MenuItem onClick={this.handleModalToggle.bind(this, SHARE)}>Share</MenuItem>
                    <MenuItem onClick={this.handleRightSidePanelToggle.bind(this, TOGGLE_RIGHT_SIDEBAR)}>Toggle Right Panel</MenuItem>
                  */}
                </DropdownButton>
              </div>

              {/* ContentArea component */}
              <ContentArea />
                {/* Debugging component */}
              {dev ? <Info /> : ''}


            </div>

            {/* Right (Side Panel) column. */}
            <div className="main-col main-col-right">

              {/* RightPanelArea component */}
              <RightPanelArea />

            </div>
          </div>
        </Main>

        {/* Modal view component */}
        <ModalArea />
      </div>
    );
  }
}

// propTypes.
Page.propTypes = {
  dispatch: React.PropTypes.func,
  state: React.PropTypes.object
};
const mapStateToProps = (state) => ({
  state
});

// Export.
export default connect(mapStateToProps)(Page);
