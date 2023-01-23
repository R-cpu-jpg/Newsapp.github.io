import React, { Component } from 'react';

import { NewsItem } from './NewsItem';

      export class News extends Component {
          constructor(){
              super();
              this.state = {
                  articles: [],
                  loading: false,
                  page:1,

          }
      }

      async componentDidMount(){
          let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=12c50882365b459b917dc014159fcd84&page=1";
          let data = await fetch(url);
          let parsedData = await data.json()
          console.log(parsedData);
          this.setState({articles: parsedData.articles})

      }

      handlePrevCheck = async () => {
          console.log("Previous");
          let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=12c50882365b459b917dc014159fcd84&page=${this.state.page - 1}&pageSize=10`;
          let data = await fetch(url);
          let parsedData = await data.json()
          console.log(parsedData);
          this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
          })
      }

      handleNextCheck = async () => {
        console.log("Next");
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=12c50882365b459b917dc014159fcd84&page=${this.state.page + 1}&pageSize=10`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
          page: this.state.page + 1,
          articles: parsedData.articles
        })
      }


    render() {
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
                <div className="container d-flex justify-content-between">
                  <button disabled={this.state.page<=1} type="button" class="btn btn-outline-info" onClick={this.handlePrevCheck}> &larr; Previous</button>
                  <button type="button" class="btn btn-outline-info" onClick={this.handleNextCheck}>Next &rarr;</button>
                </div>
            </div>
        )
    }
  }

export default News