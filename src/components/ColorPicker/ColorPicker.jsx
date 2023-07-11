import React, { Component } from 'react';

import classNames from 'classnames';

import './ColorPicker.css';

class ColorPicker extends Component {
  state = {
    activeOptionIdx: 0,
  };
  // Записываем в стейт индекс активного элемента
  setActiveInd = index => {
    this.setState({ activeOptionIdx: index });
  };

  // // Метод в котором создан базовый класс 'optionClasses' и по условию добавляем в него класс активного элемента
  // makeOptionClassName = index => {
  //   const optionClasses = ['ColorPicker__option'];

  //   if (index === this.state.activeOptionIdx) {
  //     optionClasses.push('ColorPicker__option--active');
  //   }

  //   return optionClasses.join(' ');
  // };

  // Метод в котором создан базовый класс 'optionClasses' и по условию добавляем в него класс активного элемента при помощи пакета 'classNames'
  makeOptionClassName = index => {
    return classNames('ColorPicker__option', {
      'ColorPicker__option--active': index === this.state.activeOptionIdx,
    });
  };

  render() {
    // Деструктуризация из стейта
    const { activeOptionIdx } = this.state;
    // Деструктуризация из 'props'
    const { options } = this.props;
    // Сохраняем в переменную объект по активному индексу
    const activeOption = options[activeOptionIdx];

    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        <p>
          Выбран цвет: {activeOption.label} код: {activeOption.color}
        </p>
        <div>
          {options.map(({ label, color }, index) => {
            return (
              <button
                key={label}
                className={this.makeOptionClassName(index)}
                style={{ backgroundColor: color }}
                onClick={() => this.setActiveInd(index)}
              ></button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
