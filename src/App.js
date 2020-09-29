import React from 'react';

import './App.css';
import Recipies from "./Recipies";
import SearchBar from './SearchBar'
class App extends React.Component {

    constructor(props) {
        super(props);
        this.API_ID = '2e603068';
        this.API_KEY = "1138a1747ff55025b7b9be66095c3575";
        this.urlP = "http://jsonplaceholder.typicode.com/users";
        this.state = {recipies: [] , search:'chiken'}
        this.handleClick = this.handleClick.bind(this)

    }

    async getRecipies() {
        this.url = `https://api.edamam.com/search?q=${this.state.search}&app_id=${this.API_ID}&app_key=${this.API_KEY}`;
        let responseToJson   = await fetch(this.url);
        const recipies       = await responseToJson.json();
        let data = recipies.hits ;
       this.setState({recipies:data })

    }

    handleClick(search) {
        this.setState({search:search})
        this.getRecipies()
    }
    componentDidMount() {
       this.getRecipies();
    }

    render() {
        return <div className="search-form">
                <SearchBar handleClick={this.handleClick} search={this.state.search}/>
                <Recipies recipies={this.state.recipies}/>
            </div>
    }
}

export default App;
