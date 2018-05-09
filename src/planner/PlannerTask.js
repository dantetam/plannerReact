import React, { Component } from 'react';

class PlannerTask extends Component {
  render() {
    var progressDisplay = "";
    switch (this.props.progress) {
        case "COMPLETED": 
            progressDisplay = "✓";
            break;
        case "PROGRESS":
            progressDisplay = " ";
            break;
    }
    
    return (
      <div className="PlannerTask">
        {this.props.title} &emsp;
        <button onClick={this.onClickProgressIcon} >{progressDisplay}</button>
      </div>
    );
  }
  
  onClickProgressIcon() {
      
  }
  
}

export default PlannerTask;
