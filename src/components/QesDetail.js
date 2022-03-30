import React from "react";

function QusDetail({ item }) {
  return (
    <div className="card-list" key={item.id}>
      <div className="card-point">
        <strong>0</strong>
        <span>VOTES</span>
      </div>
      <div className="card-item">
        <div className="top">
          <div className="card-name">{item.question}</div>
          <div className="card-url">
            <a target="_blank" href="/#">
              {item.url}
            </a>
          </div>
        </div>
        <div className="bottom">
          <a className="up"  >
            <i className="fas fa-arrow-up"></i>
            <span>Up Vote</span>
          </a>
          <a className="down"  >
            <i className="fas fa-arrow-down"></i>
            <span>Up Down</span>
          </a>
          <a className="remove" >
            <i className="fas fa-minus-circle"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default QusDetail;
