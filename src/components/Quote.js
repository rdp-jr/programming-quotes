import React from 'react';
import './Quote.css';
import axios from 'axios';
import Typewriter from 'typewriter-effect';


export default class Quote extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            quote: {
                en: ''
            }
        }
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
                <div className="d-flex justify-content-center align-items-center p-3" style={{height: "70vh"}}>
                    <Typewriter
                        options={{
                            wrapperClassName: "textQuote h1",
                            cursorClassName: "h1",
                            strings: [`"${this.state.quote.en || `...`}" <br>- ${this.state.quote.author || `...`}`],
                            autoStart: true,
                            loop: true,
                            delay: 10,
                            deleteSpeed: 10,
                            
                            
                        }}
                    />
                </div>
            </div>
            <div className="mt-3">
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
