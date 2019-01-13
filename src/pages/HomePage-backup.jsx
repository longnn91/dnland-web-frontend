import React, { Component } from 'react';
import { List } from 'components'

export default class HomePage extends Component {
  constructor() {
    super();
    this.itemID = null;
  }

  allowDrag = (event) => {
    event.preventDefault();
  }

  startDrag = (event) => {
    this.itemID = event.target.id;
  }

  moveItem = (event) => {
    event.target.append(document.getElementById(this.itemID));
  }

  render() {
    return (
      <div className="dropdrap">
          <div className="dropdrap__zone" onDragOver={this.allowDrag} onDrop={this.moveItem}>
            <img className="dropdrap__zone__img" id="dragItem1" onDragStart={this.startDrag} src="http://icons.iconarchive.com/icons/designbolts/free-multimedia/256/Photo-icon.png" />
            <div draggable className="dropdrap__zone__item" id="dragItem2" onDragStart={this.startDrag}></div>
        </div>
          <div className="dropdrap__zone" onDragOver={this.allowDrag} onDrop={this.moveItem}></div>
      </div>
    )
  }
}
