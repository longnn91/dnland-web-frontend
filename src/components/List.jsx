import React from 'react';
import Note from './Note';
import NoteForm from './NoteForm';
import {connect} from 'react-redux';

class List extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     mang: ['Android', 'iOS', 'NodeJs']
  //   };
  // }

  remove(index) {
    // this.state.mang.splice(index, 1);
    // this.setState(this.state);
    var {dispatch} = this.props;
    dispatch({type: 'REMOVE_ITEM', index});
  }

  add(item) {
    // this.state.mang.push(item);
    // this.setState(this.state);
    var {dispatch} = this.props;
    dispatch({type: 'ADD_ITEM', item});
  }

  render() {
    return (
      <div>
        <NoteForm handleAdd={this.add.bind(this)} />
        {this.props.mang.map((e, i) =>
          <Note key={i} handleRemove={this.remove.bind(this)} index={i}>{e}</Note>
         )}
      </div>
    );
  }
}

module.exports = connect((state) =>{
  return {
    mang: state.mang
  }
})(List);
