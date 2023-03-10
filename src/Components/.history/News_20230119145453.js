import React, { Component } from 'react';

import { NewsItem } from './NewsItem';
import Spinner from './Spinner';

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
          let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=12c50882365b459b917dc014159fcd84&page=1&pageSize=${this.props.pageSize}`;
          let data = await fetch(url);
          let parsedData = await data.json()
          console.log(parsedData);
          this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
      }

      handlePrevCheck = async () => {
          console.log("Previous");
          let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=12c50882365b459b917dc014159fcd84&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
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
        if (this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

        }
        else{
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=12c50882365b459b917dc014159fcd84&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
          page: this.state.page + 1,
          articles: parsedData.articles
        })
      }
      }


    render() {
        return (
            <div className="container my-3">
                <h1 className='text-center'>NewsLife - Top header</h1>
                <Spinner/>
                <div className="row">
                {this.state.articles.map((element)=>{
                return  <div className="col-md-4" key={element.url}>
                          <NewsItem title={element.title?element.title. slice(0, 45):""} description={element.description?element.description. slice(0, 88):""} imageUrl={element.urlToImage} newsUrl={element.url}></NewsItem>
                        </div>
                })}
                </div>
                <div className="container d-flex justify-content-between">
                  <button disabled={this.state.page<=1} type="button" className="btn btn-outline-info" onClick={this.handlePrevCheck}> &larr; Previous</button>
                  <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-outline-info" onClick={this.handleNextCheck}>Next &rarr;</button>
                </div>
            </div>
        )
    }
  }

export default News