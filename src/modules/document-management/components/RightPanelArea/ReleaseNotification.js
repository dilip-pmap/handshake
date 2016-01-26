// Dependencies.
import React from 'react';
import { connect } from 'react-redux';
import { setRightPanelAreaView } from '../../../../redux/actions';
import { DETAIL } from '../../../../redux/constants';

// Core components.
import {Button, Input, FormControls} from 'react-bootstrap';

// Misc. components.
import DetailViewDropdown from './DetailViewDropdown';

// DatePicker.
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

// Define class.
class ReleaseNotification extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);

    this.state = {
      actionItemForm: 'none',
      startDate: moment()
    };
  }

  handleSaveButtonClick() {
    const { dispatch } = this.props;
    // console.log('Save clicked');
    dispatch(setRightPanelAreaView(DETAIL));
  }

  handleActionItemOptionChange(e) {
    const val = e.target.selected;
    switch (val) {
    case true:
      this.setState({ actionItemForm: 'block' });
      break;
    default:
      this.setState({ actionItemForm: 'none' });
    }
  }

  handleChange(date) {
    this.setState({ startDate: date });
  }

  // Render method.
  render() {
    return (
      <div>
        <div className="fixed-title clearfix">
          <div className="pull-left">
            <DetailViewDropdown />
          </div>
          <div className="pull-right sidebar-header-actions">
            <Button bsStyle="default" bsSize="xs" onClick={this.handleSaveButtonClick.bind(this)}>
            Cancel
            </Button>
            &nbsp;
            <Button bsStyle="info" bsSize="xs" onClick={this.handleSaveButtonClick.bind(this)}>
            Release
            </Button>
          </div>
        </div>

        <div className="sidebar-details">
          <div className="document-details">
            <Input type="textarea" label="Release Notes" maxLength="2000" />
            <Input type="textarea" label="Training and Communication Notes" maxLength="2000" />
            <div className="form-group">
              <input type="checkbox" />
              &nbsp;
              <label className="control-label required">Is Acknowledgement Required?</label>
            </div>
            <div className="form-group">
              <label className="control-label" >Acknowledgement Due Date</label>
              <DatePicker
                className="form-control"
                selected={this.state.startDate}
                onChange={this.handleChange.bind(this)}
                dateFormat="MMMM DD, YYYY"
                // isClearable
                showYearDropdown
              />
            </div>
            <FormControls.Static label="Release Notifications">
              <option>John Smith</option>
              <option>Bob Roberts</option>
              <option>Janette Walls</option>
            </FormControls.Static>
            <Input type="select" multiple label="Additional Release Notifications" labelClassName=" required">
              <option>Jane Doe</option>
              <option>Alice Jackson</option>
              <option>Patrick Smith</option>
            </Input>
            <Input type="select" label="Release Scheduling Option" labelClassName=" required">
              <option>Release Immediately</option>
              <option>Future Date</option>
            </Input>

            <div className="form-group">
              <label className="control-label">Document Release Date</label>
              <DatePicker
                className="form-control"
                selected={this.state.startDate}
                onChange={this.handleChange.bind(this)}
                dateFormat="MMMM DD, YYYY"
                // isClearable
                showYearDropdown
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// propTypes.
ReleaseNotification.propTypes = {
  dispatch: React.PropTypes.func,
  state: React.PropTypes.object
};
const mapStateToProps = (state) => ({
  state
});

// Export.
export default connect(mapStateToProps)(ReleaseNotification);
