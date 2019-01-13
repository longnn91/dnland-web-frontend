import React, { Component } from 'react';

export default class HomePage extends Component {

  handleResize = (resizeableClass) => {
    const element = document.querySelector(`.${resizeableClass}`);
    const movingList = document.querySelectorAll(`.${resizeableClass} .${resizeableClass}__moving`);
    const minimum_size = 20;
    let original_x = 0;
    let original_y = 0;
    let original_width = 0;
    let original_height = 0;
    let original_mouse_x = 0;
    let original_mouse_y = 0;
    movingList.forEach((moveItem, index) => {
        moveItem.addEventListener('mousedown', (e) => {
        e.preventDefault();
        original_width = parseFloat(getComputedStyle(element, null).getPropertyValue('width').replace('px', ''));
        original_height = parseFloat(getComputedStyle(element, null).getPropertyValue('height').replace('px', ''));
        original_x = element.getBoundingClientRect().left;
        original_y = element.getBoundingClientRect().top;
        original_mouse_x = e.pageX;
        original_mouse_y = e.pageY;
        window.addEventListener('mousemove', resize);
        window.addEventListener('mouseup', stopResize);
      });
      let resize = (e) => {
        if (moveItem.classList.contains(`${resizeableClass}__bottom-right`)) {
            const width = original_width + (e.pageX - original_mouse_x);
            const height = original_height + (e.pageY - original_mouse_y)
            if (width > minimum_size) {
              element.style.width = width + 'px'
            }
            if (height > minimum_size) {
              element.style.height = height + 'px'
            }
        } else if (moveItem.classList.contains(`${resizeableClass}__bottom-left`)) {
            const height = original_height + (e.pageY - original_mouse_y)
            const width = original_width - (e.pageX - original_mouse_x)
            if (height > minimum_size) {
              element.style.height = height + 'px'
            }
            if (width > minimum_size) {
              element.style.width = width + 'px'
              element.style.left = original_x + (e.pageX - original_mouse_x) + 'px'
            }
        } else if (moveItem.classList.contains(`${resizeableClass}__top-right`)) {
            const width = original_width + (e.pageX - original_mouse_x)
            const height = original_height - (e.pageY - original_mouse_y)
            if (width > minimum_size) {
              element.style.width = width + 'px'
            }
            if (height > minimum_size) {
              element.style.height = height + 'px'
              element.style.top = original_y + (e.pageY - original_mouse_y) + 'px'
            }
        } else if (moveItem.classList.contains(`${resizeableClass}__top-left`)) {
            const width = original_width - (e.pageX - original_mouse_x)
            const height = original_height - (e.pageY - original_mouse_y)
            if (width > minimum_size) {
              element.style.width = width + 'px'
              element.style.left = original_x + (e.pageX - original_mouse_x) + 'px'
            }
            if (height > minimum_size) {
              element.style.height = height + 'px'
              element.style.top = original_y + (e.pageY - original_mouse_y) + 'px'
            }
          }
      }

      let stopResize = () => {
        window.removeEventListener('mousemove', resize);
      }
    })
  }

  componentDidMount() {
    this.handleResize('resizeable');
  }

  render() {
    return (
        <div className="resizeable">
            <div className="resizeable__resizer">
                <div className="resizeable__moving resizeable__top-left"></div>
                <div className="resizeable__moving resizeable__top-right"></div>
                <div className="resizeable__moving resizeable__bottom-left"></div>
                <div className="resizeable__moving resizeable__bottom-right"></div>
            </div>
        </div>
    )
  }
}
