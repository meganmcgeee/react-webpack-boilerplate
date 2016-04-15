import React from 'react';

export class Navbar extends React.Component{
  static propTypes = {
   brand: React.PropTypes.node.isRequired,
 };

render() {
  const PageHeader = React.createClass({
    render: function() {
      return (
        <div className="page-header">
          <h1>React and Webpack with Bootstrap <small>by {this.props.brand}</small></h1>
        </div>
      );
    }
  })
}
