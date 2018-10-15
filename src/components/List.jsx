import React from 'react';
import Note from './Note';
import NoteForm from './NoteForm';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mang: ['Android', 'iOS', 'NodeJs']
    };
  }

  remove(index) {
    this.state.mang.splice(index, 1);
    this.setState(this.state);
  }

  add(item) {
    this.state.mang.push(item);
    this.setState(this.state);
  }

  render() {
    return (
      <div>
        <NoteForm handleAdd={this.add.bind(this)} />
        {this.state.mang.map((e, i) =>
          <Note key={i} handleRemove={this.remove.bind(this)} index={i}>{e}</Note>
         )}
      </div>
    );
  }
}

module.exports = List;
