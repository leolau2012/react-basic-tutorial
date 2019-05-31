import React, { Component } from 'react'
import './style.css'
class RatingStar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            score: 0
        }
    }
    onClick(ev) {
        this.setState({
            score: Number(ev.target.dataset.index) + 1
        });
    }
    render() {
        return (
            <div class="starbox">
                <span data-index="0" class="on"></span>
                <span data-index="1" class="on"></span>
                <span data-index="2" class="on"></span>
                <span data-index="3" class="on"></span>
                <span data-index="4" class=""></span>
                <strong class="score">4分</strong>
            </div>
        );
    }
}

export default RatingStar;