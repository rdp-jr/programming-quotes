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
            <div>
            <div className="d-flex justify-content-center align-items-center" style={{height: "50vh"}}>
                
                <h1 className="textQuote p-5 typewriteEffect">{ `"${this.state.quote.en || `...`}"` }</h1>
            
                
            </div>
            <h3>{ `${this.state.quote.author || `...`}` }</h3>
            </div>
            <div className="mt-5">
            <a className="twitter-share-button mr-5"
                    href={`https://twitter.com/intent/tweet?text="${this.state.quote.en}" -${this.state.quote.author}`}
                    target="_noblank"
                    >
                    Tweet
                    </a>
            <button className="btn btn-primary" onClick={this.handleClick}> New Quote </button>
            </div>
            </React.Fragment>
        )
    }
}
