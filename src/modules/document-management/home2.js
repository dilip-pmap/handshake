// Dependencies.
import React from 'react';
import { connect } from 'react-redux';
import { changeFolder, setFileManagerData, setContentAreaView, toggleRightSidebar, setRightPanelAreaView } from '../../redux/actions';
import { DEFAULT, PREVIEW, UPLOAD, ACTIVITY, DETAIL, DETAILFORM, SEARCH_RESULTS, TOGGLE_RIGHT_SIDEBAR } from '../../redux/constants';

// Core components.
import {Row, Col, ButtonGroup, Button} from 'react-bootstrap';

// Layouts.
import Main from '../../layouts/main';

import ContentArea from './content-area.js';
import RightPanelArea from './right-panel-area.js';

// Utility methods.
import utils from '../../utils';

// Json file with folder structure data.
// const FileManagerData = '../../../static/data/filemanager-data.json';
const SourceData = '../../../static/data/documents-data-SKF.json';

// Define class.
class Page extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);

    // Set page title.
    utils.title(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    // Fetch Json data.
    // fetch(FileManagerData).then(response => response.json())
    //   .then(data => {
    //     // Redux action.
    //     // utils.createFolderMatrix([], data.fileManager);
    //     // dispatch(setFileManagerData(data.fileManager[0], utils.createFolderMatrix([], data.fileManager) ));
    //     // dispatch(changeFolder(data.fileManager[0].id));
    //   })
    //   .catch(error => {this.setState({error}); });

    // Fetch Source Json data.
    fetch(SourceData).then(response => response.json())
      .then(data => {
        // Redux action.
        const parsedFolders = utils.parseTreeWithBreadcrumb(data.document_folder);
        const flatFolders = utils.convertToFlatTree([], parsedFolders);
        const docFiles = data.document;
        dispatch(setFileManagerData(parsedFolders[0], flatFolders, docFiles));
        dispatch(changeFolder(0));
      })
      .catch(error => {this.setState({error}); });

    // Set initial state.
    // dispatch(setSidebarHeight(sidebarHeight));
    dispatch(setContentAreaView(DEFAULT));
    dispatch(setRightPanelAreaView(ACTIVITY));
  }

  handleContentButtonClick(view) {
    const { dispatch } = this.props;
    dispatch(setContentAreaView(view));
  }

  handleRightPanelButtonClick(view) {
    const { dispatch } = this.props;
    dispatch(setRightPanelAreaView(view));
  }

  handleRightSidePanelToggle() {
    const { state, dispatch } = this.props;
    dispatch(toggleRightSidebar(state.rightSidebarOpened));
  }

  // Render method.
  render() {
    const { state } = this.props;
    const isRightPanelOpen = state.rightSidebarOpened;

    let leftColumnSize = 9;
    let rightColumnSize = 3;
    if ( !isRightPanelOpen ) {
      leftColumnSize = 12;
      // rightColumnSize = 1;
    }
    // console.log(leftColumnSize, rightColumnSize);

    return (
      <div>
        <Main>
          <Row>
            <Col sm={leftColumnSize} id="doc_mgt-left_column">

              <div style={{ padding: '20px 20px 0', marginBottom: -10 }}>
                <ButtonGroup>
                  <Button bsStyle="default" bsSize="xs" onClick={this.handleContentButtonClick.bind(this, DEFAULT)}> Default </Button>
                  <Button bsStyle="default" bsSize="xs" onClick={this.handleContentButtonClick.bind(this, PREVIEW)}> Preview </Button>
                  <Button bsStyle="default" bsSize="xs" onClick={this.handleContentButtonClick.bind(this, UPLOAD)}> Upload </Button>
                  <Button bsStyle="default" bsSize="xs" onClick={this.handleContentButtonClick.bind(this, SEARCH_RESULTS)}> Search Results </Button>
                </ButtonGroup>
                &nbsp;
                <ButtonGroup>
                  <Button bsStyle="default" bsSize="xs" onClick={this.handleRightPanelButtonClick.bind(this, ACTIVITY)}> Activity List </Button>
                  <Button bsStyle="default" bsSize="xs" onClick={this.handleRightPanelButtonClick.bind(this, DETAIL)}> Detail </Button>
                  <Button bsStyle="default" bsSize="xs" onClick={this.handleRightPanelButtonClick.bind(this, DETAILFORM)}> Detail Form </Button>
                </ButtonGroup>
                &nbsp;
                <ButtonGroup>
                  <Button bsStyle="default" bsSize="xs" onClick={this.handleRightSidePanelToggle.bind(this, TOGGLE_RIGHT_SIDEBAR)}> Toggle Right Panel ({isRightPanelOpen}) </Button>
                </ButtonGroup>
              </div>

              {/* ContentArea component */}
              <ContentArea loadContentAreaView={this.handleContentButtonClick.bind(this)} />

            </Col>

            {/* RightPanelArea component */}
            <RightPanelArea columnWidth={rightColumnSize} />

          </Row>

        </Main>

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
