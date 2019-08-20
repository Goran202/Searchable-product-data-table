import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.targert.value
    });
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <form>
            <label>
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchBar;
