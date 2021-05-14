import React, { Component } from 'react';
import "./Cards.css";
import FlipCard from 'react-card-flip';

export default class Card extends Component {
    constructor() {
        super();
        this.state = {
            isFlipped: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }
    render() {
        return (
            <div className="card" onClick={this.props.selectCard}>
                <FlipCard
                    isFlipped={this.props.compareCard || this.props.cardTrue}
                    flipDirection="horizontal" 
                    >
                    <div onClick={this.handleClick} className="poster"></div>
                    <div onClick={this.handleClick} className="content"><i className={`fa ${this.props.icon} fa-5x`}></i></div>
                </FlipCard>
            </div>
        )
    }
}

