import React, { Component } from 'react';

class PlannerTask extends Component {

    constructor(props) {
        super(props);
        this.state = {
            progress: props.progress || "PROGRESS",
            title: props.title || "TITLE"
        }
    }

  render() {
    var progressDisplay = "";
    switch (this.state.progress) {
        case "COMPLETED":
            progressDisplay = "✓";
            break;
        case "PROGRESS":
            progressDisplay = "☐";
            break;
        default:
            break;
    }

    return (
      <div className="PlannerTask">
        {this.state.title} &emsp;
        <button onClick={this.onClickProgressIcon} >{progressDisplay}</button>
      </div>
    );
  }

  onClickProgressIcon = () => { //Note different than onClickProgressIcon() {...}
      var progressToggle = {
          "COMPLETED": "PROGRESS",
          "PROGRESS": "COMPLETED"
      };
      this.setState((state) => {
          var currentProgress = state.progress;
          var nextProgress = progressToggle[currentProgress];
          this.setState({
            progress: nextProgress
          });
      })
  }

}

export default PlannerTask;
