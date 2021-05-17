import React, { Component } from "react";
import Delete from "../Delete/Delete";

class Add extends Component {
  createTasks(item) {
    return <li key={item.key}>{item.text}</li>;
  }

  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);

    return (
      <>
        <ul className="theList">{listItems}</ul>;<Delete></Delete>
      </>
    );
  }
}

export default Add;
