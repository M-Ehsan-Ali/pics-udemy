import React, { Component } from 'react';
import axios from "axios";
import SearchBar from './searchBar';

class App extends Component{
    state = { images: [] };
     onSearchSubmit = async (term) => {
        const response = await axios.get('https://api.unsplash.com/search/photos',{
        params: {query: term},
        headers: {
            Authorization: 'Client-ID cs8Fp7PKN6R_Q-DKg0oveVnDSrjdnFhyyjjj47Bxnb4'
        }
        });
          this.setState({images: response.data.results})
    }
    render() {
    return ( <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found : {this.state.images.length} images
    </div> );
}
}
 
export default App;