const { Component } = require('react');

class Form extends Component {
  state = {
    name: '',
    tel: '',
    experience: 'junior',
    licence: false,
  };

  // Методы который заменяет значение 'state' с ключом name и tel
  // hendleNameChenge = event => {
  //   this.setState({ name: event.currentTarget.value });
  // };

  // hendleTelChenge = event => {
  //   this.setState({ tel: event.currentTarget.value });
  // };

  // Один метод который заменяет значение 'state' с ключом name и tel
  hendleChenge = evt => {
    this.setState({ [evt.currentTarget.name]: evt.currentTarget.value });
  };

  // Методы для отправки формы
  handlSubmit = e => {
    e.preventDefault();
    // Опрокидывание данных с формы в App
    this.props.onSubmitData(this.state);

    // Вызов метода для очистки формы
    this.resetForm();
  };

  // Проверяем нажат ли чекбокс
  handleLicenceChange = evt => {
    console.log(evt.currentTarget.checked);
    this.setState({ licence: evt.currentTarget.checked });
  };

  // Метод для очистки формы после отправки (submit)
  resetForm = () => {
    this.setState({ name: '', tel: '' });
    this.setState({ licence: false });
  };

  render() {
    return (
      <>
        {/* Содержание для 'input' передается через 'value' */}
        <form onSubmit={this.handlSubmit}>
          <label>
            Имя
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.hendleChenge}
              // onChange={this.hendleNameChenge}
            />
          </label>
          <label>
            Телефон
            <input
              type="tel"
              name="tel"
              value={this.state.tel}
              onChange={this.hendleChenge}
              // onChange={this.hendleTelChenge}
            />
          </label>

          {/* Радио кнопки */}
          <p>Ваш уровень</p>
          <label>
            <input
              type="radio"
              name="experience"
              value="junior"
              onChange={this.hendleChenge}
              // Проверяем какая кнопка нажата
              checked={this.state.experience === 'junior'}
            />
            Junior
          </label>
          <label>
            <input
              type="radio"
              name="experience"
              value="middle"
              onChange={this.hendleChenge}
              // Проверяем какая кнопка нажата
              checked={this.state.experience === 'middle'}
            />
            Middle
          </label>
          <label>
            <input
              type="radio"
              name="experience"
              value="senior"
              onChange={this.hendleChenge}
              // Проверяем какая кнопка нажата
              checked={this.state.experience === 'senior'}
            />
            Senior
          </label>
          <br />
          {/* Чекбокс кнопки */}
          <label>
            <input
              type="checkbox"
              name="licence"
              checked={this.state.licence}
              onChange={this.handleLicenceChange}
            ></input>{' '}
            Готов работать за еду
          </label>

          <button
            style={{ marginLeft: '40px' }}
            type="submit"
            disabled={!this.state.licence}
          >
            Отправить
          </button>
        </form>
        {/* ========================================= */}
      </>
    );
  }
}

export default Form;
