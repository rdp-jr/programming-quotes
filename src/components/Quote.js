import React from 'react';
import './Quote.css'
import axios from 'axios'

export default class Quote extends React.Component {

    state = {
        quote: {}
    }


    componentDidMount() {
        axios.get(`https://programming-quotes-api.herokuapp.com/quotes/random`)
        .then(res => {
            console.log(res.data)
            this.setState({ quote: res.data })
        })
    }

    handleClick = event => {
        event.preventDefault()

        axios.get(`https://programming-quotes-api.herokuapp.com/quotes/random`)
        .then(res => {
            console.log(res.data)
            this.setState({ quote: res.data })
        })

    }

    render() {
        return (
            <React.Fragment>
            <div className="card">
                
                <h1>"{this.state.quote.en}"</h1>
                <h5>{this.state.quote.author}</h5>
            </div>

            <button onClick={this.handleClick}> New Quote </button>
            </React.Fragment>
        )
    }
}
