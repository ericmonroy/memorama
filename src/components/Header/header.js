import React, { Component } from 'react';
import "./Header.css";


export default class Header extends Component {
    render() {
        return (
            <div>
                <header className="header">
                    <div className="title">Memorama</div>
                    <div className="title">
                        Intentos: {this.props.numberIntent}
                    </div>
                    <div>
                        <button className="btn-restart" onClick={this.props.resetGame}>Reiniciar</button>
                    </div>
                </header>
            </div>
        )
    }
}


