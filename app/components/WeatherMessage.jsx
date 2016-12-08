const React = require('react');


// arrow functions inherit 'this' from parent! so 'this.props' becomes 'props'
// then, with the advanced destructuring, i can directly pull temp and location
var WeatherMessage = ({temp, location}) => {
  return (
    <p>It's {temp} degress Celsius in {location}</p>
  )
};

module.exports = WeatherMessage;
