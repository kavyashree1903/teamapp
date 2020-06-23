import React, { Component } from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import "./MeetingCard.css";
class MeetingCard extends Component {
    render() {
        return (
            <div className="card-content">
                <Flippy
                    flipOnHover={false} // default false
                    flipOnClick={true} // default false
                    flipDirection="horizontal" // horizontal or vertical
                    ref={(r) => (this.flippy = r)} // to use toggle method like this.flippy.toggle()
                    // if you pass isFlipped prop component will be controlled component.
                    // and other props, which will go to div
                >
                    <FrontSide
                        style={{
                            width: "22vh",
                            height: "23vh",
                            background: "#C4C4C4",
                            boxShadow: "-4px -4px -4px #ffffff, 4px 4px 4px #000000",
                            borderRadius: "3vh",
                            textAlign: "center",
                        }}
                    >
                        <div className="card-container">
                            <div className="card-title">Kavya Shree</div>
                            <div className="card-date">19th March, 2020</div>
                            <div className="card-venue">Library</div>
                            <div className="card-description">
                                Lorem Ipsum is simply dummy text of the printing.
                            </div>
                            <div className="icons-meeting">
                <span>
                  <img
                      style={{ height: "3vh", width: "3vh" }}
                      src="https://ik.imagekit.io/m52sq26n4h/clear-24px.svg"
                  />
                </span>
                                <span>
                  <img
                      style={{ height: "3vh", width: "3vh" }}
                      src="https://ik.imagekit.io/m52sq26n4h/done-24px.svg"
                  />
                </span>
                            </div>
                        </div>
                    </FrontSide>

                    <BackSide
                        style={{
                            width: "22vh",
                            height: "23vh",
                            background: "#C4C4C4",
                            boxShadow: "4px 7px 4px rgba(0, 0, 0, 0.5)",
                            borderRadius: "3vh",
                            textAlign: "center",
                        }}
                    >
                        ACKNOWLEDGED
                    </BackSide>
                </Flippy>
            </div>
        );
    }
}
export default MeetingCard;
