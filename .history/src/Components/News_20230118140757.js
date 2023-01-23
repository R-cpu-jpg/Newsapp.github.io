import React, { Component } from 'react';

import { NewsItem } from './NewsItem';

export class News extends Component {
    render() {
        return (
            <div className="container my-3">
                <h2>NewsLife - Top header</h2>
                <div className="row">
                    <div className="col-md-3 m-3">
                        <NewsItem title="myTitle" description="myDescription" imageurl="https://i.cbc.ca/1.3927994.1620768102!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/thompson-rivers-university.jpg"></NewsItem>
                    </div>
                    <div className="col-md-3 m-3">
                        <NewsItem title="myTitle" description="myDescription"></NewsItem>
                    </div>
                    <div className="col-md-3 m-3">
                        <NewsItem title="myTitle" description="myDescription"></NewsItem>
                    </div>
                </div>
            </div>
        )
    }
}

export default News