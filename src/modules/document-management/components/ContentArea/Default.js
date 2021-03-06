// Dependencies.
import React from 'react';
import { connect } from 'react-redux';

// Components.
import FileManager from './FileManager/FileManager';


// Define class.
class Default extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);
  }


  // Render method.
  render() {
    // File Manager data
    const { state } = this.props;
    const currentId = state.ui.currentFolderId;
    let breadcrumbData = state.folder.items.Breadcrumbs ? state.folder.items.Breadcrumbs : [];
    let folderData = state.folder.items.Subfolders ? state.folder.items.Subfolders : [];
    let documentData = state.folder.items.Documents ? state.folder.items.Documents : [];

    return (
      <div>
        {/* FileManager component */}
        <FileManager folderData={folderData} breadcrumbData={breadcrumbData} documentData={documentData} currentFolderId={currentId} />
      </div>
    );
  }
}

// propTypes.
Default.propTypes = {
  dispatch: React.PropTypes.func,
  state: React.PropTypes.object
};
const mapStateToProps = (state) => ({
  state
});

// Export.
export default connect(mapStateToProps)(Default);
