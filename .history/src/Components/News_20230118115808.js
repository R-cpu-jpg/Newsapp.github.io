import React, { Component } from 'react';

import { NewsItem } from './newsitam';

export class News extends Component {
    render() {
        return (
            <div>
                <NewsItem title="myTitle" description="myDescription"/>
                <NewsItem/>
                <NewsItem/>
                <NewsItem/>
                <NewsItem/>
                <NewsItem/>
                <NewsItem/>
            </div>
        )
    }
}

