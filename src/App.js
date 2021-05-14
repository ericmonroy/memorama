import React, { Component } from "react";
import Header from "./components/Header/header";
import ContentTable from "./components/Table/ContentTable";
import BuildDecks from "./utils/buildDeck";
import 'font-awesome/css/font-awesome.css';
import './App.css';

const getInitialState = () => {
  const deck = BuildDecks();
  return {
    deck,
    parentSelect: [],
    compare: false,
    numberIntent: 0
  };
};


class App extends Component {
  constructor(props) {
    super(props);
    this.state = getInitialState();
  }

  render() {
    return (
      <div className="App" >
        <Header
          numberIntent={this.state.numberIntent}
          resetGame={() => this.resetGame()}
        />
        <ContentTable
          deck={this.state.deck}
          parentSelect={this.state.parentSelect}
          selectCard={(card) => this.selectCard(card)}
        />
      </div>
    );
  }

  selectCard(card) {
    if (this.state.compare || this.state.parentSelect.indexOf(card) > -1 || card.cardTrue) {
      return;
    }

    const parentSelect = [...this.state.parentSelect, card];
    this.setState({
      parentSelect
    })

    if (parentSelect.length === 2) {
      this.compareCard(parentSelect);
    }
  }



  compareCard(parentSelect) {
    this.setState({ compare: true });
    setTimeout(() => {
      const [firstCard, secondCard] = parentSelect;

      let deck = this.state.deck;

      if (firstCard.icon === secondCard.icon) {
        deck = deck.map((card) => {
          if (card.icon !== firstCard.icon) {
            return card;
          }


          return { ...card, cardTrue: true };
        });
      }

      this.winnerVerify(deck);
      this.setState({
        parentSelect: [],
        deck,
        compare: false,
        numberIntent: this.state.numberIntent + 1
      })
    }, 1000);
  }

  // verify winner method
  winnerVerify(deck) {
    if (deck.filter((card) => !card.cardTrue).length === 0) {
      alert(`Ganaste en ${this.state.numberIntent} intentos!`);
    }
  }

  // reset game method
  resetGame() {
    this.setState(
      getInitialState()
    );
  }

}

export default App;
