import React, { Component } from 'react';

import { NewsItem } from './NewsItem';

export class News extends Component {
    constructor(){
        super();
        console.log("Hello I am constructor from News Component");
        this.state = {
            articles: [],
            loading: false
    }
}

async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=12c50882365b459b917dc014159fcd84";
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({articles: parsedData.articles})

}
    render() {
        console.log("render")
        return (
            <div className="container my-3">
                <h2>NewsLife - Top header</h2>
                <div className="row">
                {this.state.articles.map((element)=>{
                return  <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title?element.title. slice(0, 45):""} description={element.description?element.description. slice(0, 88):""} imageUrl={element.urlToImage} newsUrl={element.url}></NewsItem>
                        </div>
                })}
                </div>
            </div>
        )
    }
}

export default News