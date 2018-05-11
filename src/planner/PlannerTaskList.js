import React, { Component } from 'react';

class PlannerTaskList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            collapsed: props.collapsed || false,
            title: props.title || "LIST TITLE",
            tasks: props.tasks || []
        };
    }
    
  render() {
    var progressDisplay = "";
    if (this.state.collapsed) {
            return (
              <div className="PlannerTaskList">

              </div>
            );
        }
        else {
            return (
              <div className="PlannerTaskList">
                //TODO:
              </div>
            );
        }
    }
  }
  
  onClickCollapseIcon = () => { //Note different than onClickProgressIcon() {...}
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

export default PlannerTaskList;
