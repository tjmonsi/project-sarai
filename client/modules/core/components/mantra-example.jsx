import React from 'react';

class MantraExampleComponent extends React.Component {
  componentDidMount() {
    // all javascript
  }
  handleFunction() {
    // const {list} = this.props;
    // added comment
  }
  renderList() {
    const {list} = this.props;
    return list.map((element, key) => {
      return (
        <div key={key}>
          <div onClick={this.handleFunction} >{'href'} {element.href}</div>
          <div>{'label'} {element.label}</div>
        </div>
      );
    });
  }
  render() {
    return (
      <div className = "mantra-example">
        <input
          type="text"
        />
        {this.renderList()}
      </div>
    );
  }
}

MantraExampleComponent.propTypes = {
  list: React.PropTypes.arrayOf(React.PropTypes.shape({
    href: React.PropTypes.string,
    label: React.PropTypes.string
  }))
};

MantraExampleComponent.defaultProps = {
  list: [
    {
      href: 'none',
      label: 'nothing here'
    }
  ]
};

export default MantraExampleComponent;

// < MantraExampleComponent param1 = "hello" param2 = "world" list = "data">
// this.props = {
//  param1: "hello",
//  param2: "world"
// }
