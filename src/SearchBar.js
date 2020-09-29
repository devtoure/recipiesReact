import React from "react";

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {search: this.props.search }
        this.handleClickLocal = this.handleClickLocal.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleClickLocal(e) {
        e.preventDefault() ;
        this.props.handleClick(this.state.search)
    }

    handleChange(event) {
        this.setState({search: event.target.value});
    }

    render() {
        return <div className="form-group">
                <input type="search" className="search-input " placeholder="Search info" value={this.state.search} onChange={this.handleChange}/>
                <button className="search-button" onClick={this.handleClickLocal}>Lancer la recherche</button>
             </div>
    }
}

export default SearchBar ;