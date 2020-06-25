import React, { Component } from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import "./MeetingCard.css";
class MeetingCard extends Component {
  render() {
    return (
      <div className="card-content">
        <Flippy
          flipOnHover={true} // default false
          flipOnClick={false} // default false
          flipDirection="horizontal" // horizontal or vertical
          ref={(r) => (this.flippy = r)} // to use toggle method like this.flippy.toggle()
          // if you pass isFlipped prop component will be controlled component.
          // and other props, which will go to div
        >
          <FrontSide className="frontcard">
            <div className="card-container">
              <div className="card-title">Kavya Shree</div>
              <div className="card-date">19th March, 2020</div>
              <div className="card-venue">Library</div>
              <div className="card-description">
                Lorem Ipsum is simply dummy text of the printing.
              </div>
            </div>
          </FrontSide>

          <BackSide className="backcard">
            <div className="card-title">RSVP</div>
            <div className="card-description-back">
              <div className="acknowledged-list-container">
                <ul className="acknowledged-list">
                  <li>Kavya Shree</li>
                  <li>Kavya Shree</li>
                  <li>Kavya Shree</li>
                  <li>Kavya Shree</li>
                  <li>Kavya Shree</li>
                  <li>Kavya Shree</li>
                  <li>Kavya Shree</li>
                  <li>Kavya Shree</li>
                  <li>Kavya Shree</li>
                </ul>
              </div>
              <div className="icons-meeting">
                  <span
                    className="accept-icon"
                  >
                </span>
                  <span
                    className="reject-icon"
                  >
                </span>
              </div>
            </div>
          </BackSide>
        </Flippy>
      </div>
    );
  }
}
export default MeetingCard;
