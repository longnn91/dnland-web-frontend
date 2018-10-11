import React from 'react';

class NoteForm extends React.Component {

  render() {
    return (
      <form>
        <input type="text" placeholder="Please put your item"></input>
        <input type="submit" value="ADD ITEM"></input>
      </form>
    )
  }
}

module.exports = NoteForm;
