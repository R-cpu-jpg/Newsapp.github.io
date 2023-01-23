import React, { Component } from 'react';

import { NewsItem } from './NewsItem';

export class News extends Component {
    render() {
        return (
            <div className="container my-3">
                <h2>NewsLife - Top header</h2>
                <div className="row">
                    <div className="col-md-3 m-4">
                        <NewsItem title="myTitle" description="myDescription"></NewsItem>
                    </div>
                    <div className="col-md-3">
                        <NewsItem title="myTitle" description="myDescription"></NewsItem>
                    </div>
                    <div className="col-md-3">
                        <NewsItem title="myTitle" description="myDescription"></NewsItem>
                    </div>
                </div>
            </div>
        )
    }
}

export default News