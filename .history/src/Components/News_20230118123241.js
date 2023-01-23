import React, { Component } from 'react';

import { NewsItem } from './NewsItem';

export class News extends Component {
    render() {
        return (
            <div className=" container my-3">
                <h2>NewsLife - Top header</h2>

                <NewsItem title="myTitle" description="myDescription"></NewsItem>
                <NewsItem></NewsItem>
                <NewsItem></NewsItem>
                <NewsItem></NewsItem>
                <NewsItem></NewsItem>
                <NewsItem></NewsItem>
                <NewsItem></NewsItem>
            </div>
        )
    }
}

export default News