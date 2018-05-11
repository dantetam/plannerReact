import React, { Component } from 'react';

import PlannerTask from './PlannerTask.js';

class PlannerTaskList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      collapsed: props.collapsed || false,
      title: props.title || "LIST TITLE",
      tasks: [
        {progress: "COMPLETED", title: "This is a test task that has been completed."},
        {progress: "PROGRESS", title: "This is another task still in progress."},
        {progress: "PROGRESS", title: "This is another task still in progress. Second version."},
        {progress: "COMPLETED", title: "This is a test task that has been completed."}
      ]
    };
  }

  render() {
    var progressDisplay = "";
    var listTasksJsx = [];

    if (this.state.collapsed) {
      return (
        <div className="PlannerTaskList">
          {this.state.title}
          <button onClick={this.onClickCollapseIcon}>+</button>
        </div>
      );
    }
    else {
      for (var task of this.state.tasks) {
        listTasksJsx.push((
          <PlannerTask progress={task.progress} title={task.title}></PlannerTask>
        ));
      }
      return (
        <div className="PlannerTaskList">
          {this.state.title}
          <button onClick={this.onClickCollapseIcon}>-</button>
          {listTasksJsx}
        </div>
      );
    }
  }

  onClickCollapseIcon = () => { //Note different than onClickProgressIcon() {...}
    this.setState((state) => {
      this.setState({
        collapsed: !state.collapsed
      });
    });
  }

}

export default PlannerTaskList;
