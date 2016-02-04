import React from 'react';

class MantraExampleComponent extends React.Component {
  componentDidMount() {
    // all javascript
  }
  callFunction() {
    const {list} = this.props;
    console.log(list);
  }
  renderList() {
    const {list} = this.props;
    return list.map((element, key) => {
      return (
        <div key={key}>
          <div onClick={this.callFunction.bind(this)}>{'href'} {element.href}</div>
          <div>{'label'} {element.label}</div>
        </div>
      );
    });
  }
  render() {
    return (
      <div className = "mantra-example">
        <input
          ref="x"
          type="text"
        />
        {this.renderList()}
        {this.refs.x}
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
