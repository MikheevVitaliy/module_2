import React, { Component } from 'react';
import css from './TodoForm.module.css';

class TodoForm extends Component {
  state = {
    message: '',
  };
  // Записымаем в state из поля ввода textarea
  handleChange = evt => {
    this.setState({ message: evt.currentTarget.value });
  };

  handlSubmit = e => {
    e.preventDefault();

    // console.log(this.state);
    // Опрокидывание данных с формы в App
    this.props.onSubmitTodoData(this.state.message);

    // Вызов метода для очистки формы
    this.resetForm();
  };

  // Метод для очистки формы после отправки (submit)
  resetForm = () => {
    this.setState({ message: '' });
  };

  render() {
    return (
      <form onSubmit={this.handlSubmit} className={css.todoForm}>
        <textarea
          className={css.todoTexterea}
          value={this.state.message}
          onChange={this.handleChange}
        ></textarea>
        <button type="submit" className={css.todoButton}>
          Сохранить
        </button>
      </form>
    );
  }
}

export default TodoForm;
