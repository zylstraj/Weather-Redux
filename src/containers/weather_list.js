import React from 'react';
import { connect } from 'react-redux';

class WeatherList extends React.Component {
  renderWeather(cityData) {
    return (
      <p>{cityData.city.name}</p>
    )
  }
  render() {
    return (
      <div>
      {this.props.weather.map(this.renderWeather)}
      </div>

    )
  }
}

function mapStateToProps({weather}) {
  console.log(weather);
  return { weather : weather }
}
export default connect(mapStateToProps)(WeatherList);
