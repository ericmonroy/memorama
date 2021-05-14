import React, { Component } from 'react';
import Card from "../Cards/card";
import "./Table.css";

export default class ContentTable extends Component {

    render() {
        return (
            <div className="table">
                {
                    this.props.deck.map((card, index) => {
                        const compareCard = this.props.parentSelect.indexOf(card) > -1;
                        return <Card
                            key={index}
                            icon={card.icon}
                            compareCard={compareCard}
                            selectCard={() => this.props.selectCard(card)}
                            cardTrue={card.cardTrue}
                        />
                    })
                }
            </div>
        )
    }
}

