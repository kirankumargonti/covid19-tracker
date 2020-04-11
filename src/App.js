import React, { Component } from 'react';

import Cards from './components/Cards/Cards';
import CountryPicker from './components/CountryPicker/CountryPicker';
import Chart from './components/Chart/Chart';
import { fetchData } from './components/API';
import { red } from '@material-ui/core/colors';

class App extends Component {
  state = {
    data: {},
    country: '',
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({
      data: fetchedData,
    });
  }
  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({
      data: fetchedData,
      country: country,
    });
  };
  render() {
    //destructuring
    const { data, country } = this.state;

    return (
      <div>
        <div className='image-container'>
          <img src='https://i.ibb.co/7QpKsCX/image.png' alt='COVID-19' />
        </div>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
        <footer>
          <p style ={{padding: '20px 5px'}} >Made with &#10084; by Kirankumar Gonti</p>
        </footer>
      </div>
    );
  }
}

export default App;
