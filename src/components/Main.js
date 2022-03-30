import React, { Component } from "react";
import Swal from "sweetalert2";
import { getId } from "../utils/utils";
import data from "./data";
import Options from "./Options";
import History from "./History";

const INITIAL_STATE = {
  selectionHistory: [],
};

export class Main extends Component {
  constructor() {
    super();
    this.state = INITIAL_STATE;
  }

  componentDidMount(){
    Swal.fire({
      title: "Bienvenido!",
      text: 'Dependiendo de la situación, selecciona A o B dependiendo del camino que quieras seguir',
      confirmButtonText: "Dale"
    });
  }

  handleClick = ({ target: { id } }) => {
    this.setState({
      selectionHistory: [...this.state.selectionHistory, id],
    });
  };

  handleReset = () => {
    Swal.fire({
      title: "Estas seguro que querés reiniciar la historia?",
      confirmButtonText: "Si",
      cancelButtonText: "No",
      type: "warning",
      showCancelButton: true,
    }).then((result) => {
      if (result.value) {
        this.setState(INITIAL_STATE);
      }
    });
  };

  getData = () => {
    const [current] = data.filter(
      (curr) =>
        curr.id ===
        getId(
          this.state.selectionHistory.length + 1,
          this.state.selectionHistory[this.state.selectionHistory.length - 1]
        )
    );
    return current;
  };

  getParsedHistory = () => {
    const historyStr = this.getData().historia;
    return historyStr.replaceAll(". ", `.\n`);
  };

  render() {
    return (
      <div className="main-app green lighten-4">
        <div />
        <div className="container center">
          <div className="header">
            <h1 className="history">{this.getParsedHistory()}</h1>
          </div>

          {this.state.selectionHistory.length !== 4 && (
            <Options
              handleClick={this.handleClick}
              optA={this.getData().opciones.a}
              optB={this.getData().opciones.b}
            />
          )}
          {this.state.selectionHistory.length === 4 && (
            <button
              className="waves-effect waves-light btn green"
              onClick={this.handleReset}
            >
              Empezar de nuevo
            </button>
          )}
        </div>
        <History selectionHistory={this.state.selectionHistory} />
      </div>
    );
  }
}

