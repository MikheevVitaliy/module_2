import React from 'react';
// import classNames from 'classnames/bind';
import css from './TodoList.module.css';
// import './TodoList.scss';
// const cN = classNames.bind(css.cardList);

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => {
  return (
    <ul className={css.containerTodo}>
      {todos.map(({ id, text, completed }) => (
        <li
          key={id}
          className={css.cardList}
          // className={cN({})}
        >
          <input
            type="checkbox"
            className="inputChecbox"
            checked={completed}
            onChange={() => onToggleCompleted(id)}
          />
          <p className={css.cardP}>{text}</p>
          <button
            type="button"
            className={css.todoButton}
            onClick={() => onDeleteTodo(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
