const React = require('react');

var WeatherMessage = React.createClass({
  render: function () {
    var {temp, location} = this.props;
    return (
      <p>It's {temp} degress Fahrenheit in {location}</p>
    )
  }
})

module.exports = WeatherMessage;
