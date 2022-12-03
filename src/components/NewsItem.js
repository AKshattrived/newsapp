import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://a57.foxnews.com/cf-images.us-east-1.prod.boltdns.net/v1/static/694940094001/0b979717-f563-4dd3-ae3f-2ff3e1ef47c5/7130512a-03f4-47b6-b588-1cea1e1d3e18/1280x720/match/1024/512/image.jpg?ve=1&tl=1"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="/" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}
