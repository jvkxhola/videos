import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { term:'' };
  }

  onChangeText = (e) => {
    this.setState({ term: e.target.value });
  }

  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.term);
  }

  render() {
    return(
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Video Search</label>
            <input type="text" value={this.state.term} onChange={this.onChangeText} />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;