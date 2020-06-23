import React, { Component } from "react";
import MeetingCard from "../../Individual/Meetings/Meeting_Card/MeetingCard";
import "./MeetingDashboard.css";
class MeetingDashboard extends Component {
    render() {
        return (
            <div className="meet-dashboard">
                <div className="meet-cards">
                    <MeetingCard />
                    <MeetingCard />
                    <MeetingCard />
                    <MeetingCard />
                    <MeetingCard />
                </div>
            </div>
        );
    }
}
export default MeetingDashboard;
