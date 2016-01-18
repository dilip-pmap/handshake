// Dependencies.
import React from 'react';
import { connect } from 'react-redux';
import { DEFAULT, UPLOAD, SEARCH_RESULTS } from '../../../../redux/constants';
// import {Link} from 'react-router';
// import {LinkContainer} from 'react-router-bootstrap';

// Core components.
import {Row, Col, /* ListGroup, ListGroupItem, */ ButtonGroup, DropdownButton, MenuItem, Input} from 'react-bootstrap';
import Icon from 'react-fa';

// import utils from '../../../../utils';

// Define const.
const ALLDOCS_TITLE = 'All Documents';
const MYDOCS_TITLE = 'My Documents';
const UPLOADEDDOCS_TITLE = 'My Pending Uploads';
const RECENTDOCS_TITLE = 'Recent Documents';
const SEARCH_TITLE = 'Search';

// Define class.
class ContentAreaHeader extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);

    this.state = {
      showResults: '',
      sectionTitle: this.props.customTitle || ALLDOCS_TITLE
    };
  }

  // Search Field.
  handleSearchFieldOnChange(e) {
    // console.log('Search:', e.target.value);
    this.setState({ sectionTitle: e.target.value });
    // const { state } = this.props;
    // const leftSidebarOpened = state.leftSidebarOpened;
  }
  onFocus() {
    this.setState({
      showResults: 'results_wrapper--open'
    });
  }
  onBlur() {
    this.setState({
      showResults: ''
    });
  }

  // Change list view.
  handleDropdownMenuChange(view, e) {
    e.preventDefault();
    switch (view) {
    case DEFAULT:
      this.state.sectionTitle = ALLDOCS_TITLE;
      break;
    case UPLOAD:
      this.state.sectionTitle = UPLOADEDDOCS_TITLE;
      break;
    case SEARCH_RESULTS:
      this.state.sectionTitle = SEARCH_TITLE;
      break;
    default:
      this.state.sectionTitle = ALLDOCS_TITLE;
    }
  }

  // Render method.
  render() {
    return (
      <Row>
        <Col md={6}>
          <ButtonGroup className="title-dropdown">
            <DropdownButton id="file_manager-docs_dropdown" title={this.state.sectionTitle} bsStyle="link" bsSize="lg">
              <MenuItem eventKey="1" onClick={this.handleDropdownMenuChange.bind(this, DEFAULT)}>{ALLDOCS_TITLE}</MenuItem>
              <MenuItem eventKey="2">{MYDOCS_TITLE}</MenuItem>
              <MenuItem eventKey="3" onClick={this.handleDropdownMenuChange.bind(this, UPLOAD)}>{UPLOADEDDOCS_TITLE}</MenuItem>
              <MenuItem eventKey="4">{RECENTDOCS_TITLE}</MenuItem>
            </DropdownButton>
          </ButtonGroup>
        </Col>

        <Col md={6}>
          <div className="action-bar-spacing text-right">

            <DropdownButton id="AddDocumentDropdown" title="Add" href="#" bsStyle="success" bsSize="sm" pullRight>
              <MenuItem onClick={this.handleDropdownMenuChange.bind(this, UPLOAD)}>
                <Icon name="upload" />
                &nbsp;
                Upload New Document
              </MenuItem>
              <MenuItem>
                <Icon name="link" />
                &nbsp;
                Web Link
              </MenuItem>
              <MenuItem>
                <Icon name="book" />
                &nbsp;
                Hardcopy
              </MenuItem>
            </DropdownButton>

            <div className="search-wrapper">
              <Input type="search" placeholder="Search" bsSize="small"
                onFocus={this.onFocus.bind(this)}
                onBlur={this.onBlur.bind(this)}
                onChange={this.handleSearchFieldOnChange.bind(this)}
              />
            </div>

          </div>
        </Col>

      </Row>
    );
  }
}

// Parent Functions.
ContentAreaHeader.propTypes = {
  customTitle: React.PropTypes.string,
  dispatch: React.PropTypes.func,
  state: React.PropTypes.object
};

const mapStateToProps = (state) => ({
  state
});

// Export.
export default connect(mapStateToProps)(ContentAreaHeader);
