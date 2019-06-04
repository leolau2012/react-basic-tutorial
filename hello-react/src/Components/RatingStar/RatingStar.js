import React, { Component } from 'react'
import './style.css'
class RatingStar extends Component {
    constructor(props) {
        super(props);
        //1.这里定义
        this.state = {
            score: 0
        }
    }
    
    handleClick = (ev) => {
        //2.这里改
        this.setState({
            score: Number(ev.target.dataset.index) + 1
        });
    }
    render() {
        console.log(this.props.unit);
        const score = this.state.score;
        return (
            <div className="starbox">
                <span data-index="0" onClick={this.handleClick} className={score >= 1 ? 'on' : ''}></span>
                <span data-index="1" onClick={this.handleClick} className={score >= 2 ? 'on' : ''}></span>
                <span data-index="2" onClick={this.handleClick} className={score >= 3 ? 'on' : ''}></span>
                <span data-index="3" onClick={this.handleClick} className={score >= 4 ? 'on' : ''}></span>
                <span data-index="4" onClick={this.handleClick} className={score >= 5 ? 'on' : ''}></span>
                <strong className="score">{this.state.score}{this.props.unit}</strong>
            </div>
        );
    }
}

export default RatingStar;