import React, { Component } from "react";
import { render } from "react-dom";

const myListItems = [];

class ShoppingContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      promiseIsResolved: false
    };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(e) {
    // e.preventDefault();
    // console.log("in frontend ", this.todo.value);

    fetch("/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ item: this.todo.value })
    })
      .then(res => {
        this.todo.value = "";
        return res.json();
      })
      .catch(err => console.log("ShoppingContainer: fetch POST ERROR: ", err));

    this.setState({
      items: [this.todo.value, ...this.state.items]
    });
  }

  deleteItem(val) {
    console.log("MY VAL!!!!!!!!!!!", val);
    fetch("/delete", {
      method: "DELETE",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ item: val })
    })
      .then(res => {
        // console.log("My res -->", res);
        location.reload();
        return res.json();
      })
      .catch(err => console.log("TodoItems: fetch DELETE ERROR: ", err));
  }

  componentWillMount() {
    fetch("/getAll")
      .then(res => {
        return res.json();
      })
      .then(data => {
        for (let i = data.length - 1; i >= 0; i--) {
          myListItems.push(
            <div>
              <button
                id="compbutton"
                key={i}
                onClick={() => this.deleteItem(data[i].item)}
              >
                Complete Task
              </button>
              <div
                className="eachItem"
                // key={i}
                id={i}
                // onClick={() => this.deleteItem(data[i].item)}
              >
                {data[i].item}
              </div>
            </div>
          );
        }
        this.setState({ promiseIsResolved: true });
        // console.log("myListItems in fetch --> ", myListItems);
      })
      .catch(err => console.log("ShoppingContainer: fetch GET ERROR: ", err));
  }

  render() {
    if (!this.state.promiseIsResolved) {
      return null;
    }
    return (
      <div>
        <form id="formid" onSubmit={this.addItem}>
          <input
            id="item"
            type="text"
            name="item"
            ref={text => (this.todo = text)}
            placeholder="Add new task here"
          />
          <input id="submit" type="submit" value="Add Task" />
        </form>
        <div id="box">{myListItems}</div>;
      </div>
    );
  }
}

export default ShoppingContainer;
