import React, { Component } from "react";
import TodayPlan from "./TodayPlan";

class TodayPlanApp extends Component {
  render() {
    const { onButtonClick, hasPlan } = this.props;
    return (
      <div className="body">
        {hasPlan ? <TodayPlan /> : null}
        <button onClick={onButtonClick}>계획 없음</button>
      </div>
    );
  }
}
function TodayPlanAppFnc(props) {
  const { onButtonClick, hasPlan } = props;
  return (
    <div className="body">
      {hasPlan ? <TodayPlan /> : null}
      <button onClick={onButtonClick}>계획 없음</button>
    </div>
  );
}

export default TodayPlanApp;
