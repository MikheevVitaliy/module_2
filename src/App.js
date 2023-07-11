import React, { Component } from 'react';
import './App.css';
import Dropdoun from './components/Dropdoun/Dropdoun';
import ColorPicker from 'components/ColorPicker/ColorPicker';
import TodoList from './components/TodoList';
import Form from 'components/Form/Form';
import TodoForm from 'components/TodoList/TodoForm';
import { nanoid } from 'nanoid';
import Filter from 'components/TodoList/TodoFilter';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pinK', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

class App extends Component {
  state = {
    todos: [
      { id: 'id-1', text: 'Выучить основы реакт', completed: false },
      { id: 'id-2', text: 'Разобраться с React Router', completed: false },
      { id: 'id-3', text: 'Пережить Redux', completed: false },
    ],
    filter: '',
  };

  // Метод для удаления из 'Todo'
  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  // Метод который проверяет, если id выбранного объекта совпадает с объектом который перебирает map то распыляет старый объект и свойство completed меняет на противоположное. Если не совпадает, возвращает такойже объект.
  onToggleCompleted = todyId => {
    // this.setState(prevState => ({
    //   todos: prevState.todos.map(todo => {
    //     if (todo.id === todyId) {
    //       console.log('Нашли нужный');
    //       return { ...todo, completed: !todo.completed };
    //     }
    //     return todo;
    //   }),
    // }));

    // Тоже самое через тернарный оператор
    this.setState(prevState => ({
      todos: prevState.todos.map(todo =>
        todo.id === todyId ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  formSubmitTodoHandler = textMessage => {
    // Загатовка объекта для создания todo
    const todo = {
      id: nanoid(4),
      text: textMessage,
      completed: false,
    };

    // обавляем новый state и распыляем старый state
    this.setState(prevState => ({ todos: [todo, ...prevState.todos] }));
    console.log(this.state.todos);
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  // Метод для поиска по имени в todo (если необходимые данные есть в state значит в функцию ничего передавать не нужно)
  getFilterTodo = () => {
    // Приводим содержимое из инпут фильтра которое записано в state.filter к нижнему регистру
    const normalizedFilter = this.state.filter.toLowerCase();

    // Фильтруем в масиве todos свойство text (возвращаем только те todo в которых свойство text включает в себя текущее значение filter)
    return this.state.todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter)
    );
  };

  // Переменная для хранения данных из заполненной формы
  formSubmitHandler = dataForm => {
    // console.log(dataForm);
  };
  // Метод для вычисления выполненых в Todo list
  calculateCompletedTodos = () => {
    const { todos } = this.state;

    return todos.reduce((acum, todo) => (todo.completed ? acum + 1 : acum), 0);
  };

  render() {
    // Деструктуризация 'todos' из 'state'
    const { todos } = this.state;
    // Локальная переменная для вызова функции фильтрации
    const filterTodos = this.getFilterTodo();
    // Локальная переменная для вызова функции
    const completedTodoCount = this.calculateCompletedTodos();

    return (
      <>
        {/* ========================================= */}
        <h1>Состояние компонента</h1>
        <Dropdoun />
        {/* ========================================= */}
        <h1>Цвет компонента</h1>
        <ColorPicker options={colorPickerOptions} />
        {/* ========================================= */}
        <h1>Todo list</h1>
        <TodoForm onSubmitTodoData={this.formSubmitTodoHandler} />

        <Filter value={this.state.filter} onChange={this.changeFilter} />

        <div>
          <p>Общее количество: {todos.length}</p>
          <p>
            Количество выполненых (через filter):
            {todos.filter(todo => todo.completed).length}
          </p>
          <p>
            Количество выполненых (через reduce):
            {completedTodoCount}
          </p>
        </div>
        <TodoList
          // Передаём для создания карточек отфильтрованные todo (filterTodos)
          todos={filterTodos}
          // todos={todos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.onToggleCompleted}
        />
        {/* ========================================= */}
        <h1>Форма для отправки</h1>
        <Form onSubmitData={this.formSubmitHandler} />
        {/* ========================================= */}
      </>
    );
  }
}

export default App;
