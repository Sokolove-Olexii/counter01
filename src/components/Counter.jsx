import { Component } from "react";

export class Counter extends Component {
  //   constructor(x, y) {
  //     this.x = x;
  //     this.y = y;
  //   } //В React'і можна не створювати конструктор, він створюється під капотом автоматично
  state = {
    number: this.props.value,
    test: "test",
  };

  add = () => {
    // this.state.number += 1; //Такий спосіб зміни внутрішнього стану - не спрацює в React'і, для того щоб змінювати state треба використовувати setstate
    // this.setState({ number: 1 }); //Цей спосіб зміни state підходить якщо ми хочемо змінити значення, не прив'язуючись до попереднього значення;
    // Якщо хочемо оновити state використовуючи попереднє значення state'у, то передаємо в setState callBack;
    this.setState((prevState) => {
      return {
        number: prevState.number + 1,
      };
    });
  };

  minus = () => {
    // this.state.number -= 1;
    this.setState((prevState) => {
      return {
        number: prevState.number - 1,
      };
    });
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <button onClick={this.add}>add</button>
        <p>{this.state.number}</p>
        <button onClick={this.minus}>minus</button>
      </div>
    );
  }
}
