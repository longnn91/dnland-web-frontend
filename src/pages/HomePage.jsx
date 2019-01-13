import React, { Component } from 'react';

export default class HomePage extends Component {

  optimizeBar(itemClass) {
    let parentElement = document.querySelector(`.${itemClass}`);
    let textElement = document.querySelector(`.${itemClass}__text`);
    let markElement = document.querySelector(`.${itemClass}__mark`);
    let element = document.querySelector(`.${itemClass}__controller`);
    const maximum = 400 - 12;
    let original_mouse_x = 0;
    let original_left = 0;

    textElement.innerHTML = original_left;
    element.addEventListener('mousedown', (e) => {
      e.preventDefault();
      original_left = element.getBoundingClientRect().left - parentElement.getBoundingClientRect().left;
      original_mouse_x = e.pageX;
      window.addEventListener('mousemove', movingController);
      window.addEventListener('mouseup', rejectController);
    });

    let movingController = (e) => {
      let left = original_left + e.pageX - original_mouse_x;
      left = left < -3 ? -3 : (left > maximum ? maximum : left);
      element.style.left = left + 'px';
      markElement.style.width = (left + 8) + 'px';
      textElement.innerHTML = parseInt((left/maximum)*100);
    }

    let rejectController = () => {
      window.removeEventListener('mousemove', movingController);
    }
  }

  componentDidMount() {
    this.optimizeBar('optimizeBar');
  }

  render() {
    return (
        <div className="optimizeBar">
            <div className="optimizeBar__mark"></div>
            <div className="optimizeBar__controller">
              <div className="optimizeBar__text"></div>
            </div>
        </div>
    )
  }
}
