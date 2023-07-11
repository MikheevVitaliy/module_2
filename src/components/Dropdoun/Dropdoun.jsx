import React, { Component } from 'react';
import css from './Dropdoun.module.css';

class Dropdoun extends Component {
  state = {
    visible: false,
  };
  // Методы которые меняют состояние 'visible'
  // ===================================
  show = () => {
    this.setState({ visible: true });
  };

  hide = () => {
    this.setState({ visible: false });
  };
  // ===================================

  // Метод который меняет состояние 'visible' от предыдущего
  // ===================================
  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };
  // ===================================

  render() {
    return (
      <div className={css.containerDropdoun}>
        <button type="button" onClick={this.show}>
          Показать
        </button>
        <button type="button" onClick={this.hide}>
          Скрыть
        </button>
        <button type="button" onClick={this.toggle}>
          {this.state.visible ? 'Скрыть' : 'Показать'}
        </button>
        {/* Рендер по условию в зависимости от состояния 'visible' */}
        {this.state.visible && (
          <div className={css.dropdounMenu}>Выпадающее окно</div>
        )}
      </div>
    );
  }
}

export default Dropdoun;
