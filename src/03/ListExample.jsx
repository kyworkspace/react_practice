import React, { Component } from "react";

class ListExample extends Component {
  render() {
    const todoList = [
      { taskName: "빨래", finished: false },
      { taskName: "공부", finished: true },
    ];

    return (
      <div>
        {todoList
          .filter((todo) => todo.finished)
          .map((todo, i) => (
            <div key={todo.taskName}>{todo.taskName}</div>
          ))}
      </div>
    );
  }
}

export default ListExample;
