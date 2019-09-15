import React from "react";

class Header extends React.Component {
  render() {
    const list = this.props.list || [];

    return <h2>There are {list.length} Items to Complete</h2>;
  }
}

export default Header;