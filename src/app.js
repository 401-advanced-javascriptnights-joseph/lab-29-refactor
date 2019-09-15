import React from "react";

import Header from "./components/header.js";
// import Form from "./components/form.js";
// import Items from "./components/items.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      text: ""
    };
  }

  handleEnter = e => {
    e.preventDefault();
    if (e.key === "Enter") {
      this.setState(prevState => ({
        list: prevState.list.concat(this.state.text),
        text: ""
      }));
    }
  };

  handleChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  removeItem = index => {
    const list = this.state.list;
    list.splice(index, 1);
    this.setState({ list });
  };

  render() {
    return (
      <>
        <Header />
        <input
          value={this.state.text}
          onChange={e => this.handleChange(e)}
          onKeyUp={this.handleEnter}
        />
        <div>
          {this.state.list.map((item, index) => {
            return (
              <p key={index}>
                {item}
                <button onClick={() => this.removeItem(index)}>Delete</button>
              </p>
            );
          })}
        </div>
      </>
    );
  }
}

export default App;
