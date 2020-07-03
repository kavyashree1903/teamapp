import React, { Component } from "react";
import MeetingCard from "../../Individual/Meetings/Meeting_Card/MeetingCard";
import "./MeetingDashboard.css";
class MeetingDashboard extends Component {
    render() {
        return (
            <div className="outer-container-dashboard">
                <div className="background-for-dashboard">
                    <div className="meet-cards">
                        <MeetingCard />
                        <MeetingCard />
                        <MeetingCard />
                        <MeetingCard />
                        <div className="pseudo" />
                        <div className="pseudo" />
                        <div className="pseudo" />
                        <div className="pseudo" />

                    </div>
                </div>
            </div>
        );
    }
}
export default MeetingDashboard;
