import React from 'react';

class Note extends React.Component {
  removeNode() {
    var { index, handleRemove } = this.props;
    handleRemove(index);
  }
  render() {
    return (
      <div className="group-button">
        <p>{this.props.children}</p>
        <button onClick={this.removeNode.bind(this)} >Delete</button>
      </div>
    )
  }
}

module.exports = Note;
