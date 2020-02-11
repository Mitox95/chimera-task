import React from 'react';
import './App.css';
import Searchbar from './components/searchbar';
import Result from './components/result';


class App extends React.Component {

  results = [];
  state = {
    items: [],
    error: ''
  };
  callbackFunction = (searchString) => {
    fetch("https://www.songsterr.com/a/ra/songs.json?pattern=" + searchString + "&size=200")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            items: result
          });
        },

        (error) => {
          this.setState({
            error
          });
        }
      )
  }

  render() {
    return (
      <div className="App">
        <h1>Wyszukiwarka Tabów</h1>
        <Searchbar onSearchChange={this.callbackFunction} />
        <div>
          {
            this.state.items.map(item => (
              <Result
                id={item.id}
                artist={item.artist.name}
                title={item.title}
                tabtypes={item.tabTypes}
              />
            ))
          }
        </div>
      </div>
    );
  }
}
export default App;
