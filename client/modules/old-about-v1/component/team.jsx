import React from 'react';
import ReactMarkdown from 'react-markdown';
import data from './coded-text/team.js';
import classNames from 'classnames';

class TeamComponent extends React.Component {
  constructor() {
    super();
    this.data = data;
  }
  componentDidMount() {
    if (componentHandler) {
      componentHandler.upgradeDom();
    }

  }
  componentDidUpdate() {
    if (componentHandler) {
      componentHandler.upgradeDom();
    }
  }
  renderPerson(person) {
    return (
      <span>
        <img src={person.img} /><br />
        <span><strong>{person.name}</strong></span><br/>
        <span><i>{person.position1}</i></span><br />
        <span>{person.position2}</span>
      </span>
    );
  }
  defaultClass() {
    return 'mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--2-col-phone project-team'
  }
  renderProjectLeaders() {
    return this.data.projectLeaders.map((leader, key) => {
      console.log(leader);
      const className = key % 2 === 0 ? classNames(this.defaultClass(),
        ['mdl-cell--2-offset-desktop']) : this.defaultClass();
      return (
        <div
          className={className}
          key={key}
        >
          {this.renderPerson(leader)}
        </div>
      );
    });
  }
  render() {
    return (
      <div className="sarai-team">
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--4-col mdl-cell--4-offset-desktop
            mdl-cell--4-col-tablet mdl-cell--2-offset-tablet
            mdl-cell--4-col-phone project-team">
            <h1>{'The Team'}</h1>
          </div>
          <div className="mdl-cell mdl-cell--4-col mdl-cell--4-offset-desktop
            mdl-cell--4-col-tablet mdl-cell--2-offset-tablet
            mdl-cell--4-col-phone project-team">
            {this.renderPerson(this.data.mainProjectLeader)}
          </div>
        </div>
        <div className="mdl-grid">
          {this.renderProjectLeaders()}
        </div>
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--4-col mdl-cell--4-offset-desktop
            mdl-cell--4-col-tablet mdl-cell--2-offset-tablet
            mdl-cell--4-col-phone project-team">
            <h3>{'Project 1'}</h3>
          </div>
        </div>
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--4-col mdl-cell--4-offset-desktop
            mdl-cell--4-col-tablet mdl-cell--2-offset-tablet
            mdl-cell--4-col-phone project-team">
            <h3>{'Project 2'}</h3>
          </div>
        </div>
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--4-col mdl-cell--4-offset-desktop
            mdl-cell--4-col-tablet mdl-cell--2-offset-tablet
            mdl-cell--4-col-phone project-team">
            <h3>{'Project 3'}</h3>
          </div>
        </div>
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--4-col mdl-cell--4-offset-desktop
            mdl-cell--4-col-tablet mdl-cell--2-offset-tablet
            mdl-cell--4-col-phone project-team">
            <h3>{'Project 4'}</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default TeamComponent;
