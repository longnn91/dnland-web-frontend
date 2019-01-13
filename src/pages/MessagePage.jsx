import React, { Component } from 'react';
import { messageData } from 'constants/data';

export default class MessagePage extends Component {
  constructor(props) {
    super(props);
    this.currentPath = window.location.pathname;
    this.configData = messageData.filter((item) => item.path === this.currentPath)[0];
  }

  render(){
    return (
      <div className="main main--center">
          <div className="message">
              <div className="message__header">
                  <h2 className="message__title">{this.configData.title}</h2>
              </div>
              <div className="message__main">
                  <h3 className="message__text">{this.configData.message}</h3>
                  <div className="message__group-btn mgt-40">
                      {
                        this.configData.button.map( (item, index) => {
                          return <button key={index} onClick={() => this.props.history.push(item.redirectTo)} className={item.className}>{item.name}</button>
                        })
                      }
                  </div>
              </div>
          </div>
      </div>
    )
  }
}
