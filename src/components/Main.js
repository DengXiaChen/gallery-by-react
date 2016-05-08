require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

class HelloComponent extends React.Component {
  render() {
    return (
      <div>Hello {this.props.name}</div>
    );
  }
}

export default HelloComponent;
