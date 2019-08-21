import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    //this.state = { value: "a" };

    //this.handleChange = this.handleChange.bind(this);
  }

  /*handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }*/

  render() {
    return (
      <React.Fragment>
        <div>
          <form>
            <label>
              <input
                type="text"
                value={this.props.value}
                onChange={this.props.onChange}
              />
            </label>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchBar;
