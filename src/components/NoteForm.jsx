import React from 'react';
import {connect} from 'react-redux';

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdding: false
    }
  }

  toogle() {
    // this.state.isAdding = !this.state.isAdding;
    // this.setState(this.state);
    var {dispatch} = this.props;
    dispatch({type: 'TOGGLE_IS_ADDING'});
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.refs.txt.value) {
      this.props.handleAdd(this.refs.txt.value);
      this.refs.txt.value = '';
      this.toogle();
    }
  }

  render() {
    if (this.props.isAdding) {
      return (
        <form onSubmit={this.handleSubmit.bind(this)} className="form">
          <input className="form__input" type="text" placeholder="Please put your item" ref="txt"></input>
          <input className="form__button form__button--small" type="submit" value="ADD ITEM"></input>
        </form>
      )
    }
    return <button class="form__button" onClick={this.toogle.bind(this)}>+</button>
  }
}

module.exports = connect((state) => {
  return {
    isAdding: state.isAdding
  }
})(NoteForm);
