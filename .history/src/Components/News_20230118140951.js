import React, { Component } from 'react';

import { NewsItem } from './NewsItem';

export class News extends Component {
    render() {
        return (
            <div className="container my-3">
                <h2>NewsLife - Top header</h2>
                <div className="row">
                    <div className="col-md-3 m-3">
                        <NewsItem title="myTitle" description="myDescription" imageUrl="https://i.cbc.ca/1.3927994.1620768102!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/thompson-rivers-university.jpg"></NewsItem>
                    </div>
                    <div className="col-md-3 m-3">
                        <NewsItem title="myTitle" description="myDescription" imageUrl="https://a57.foxnews.com/cf-images.us-east-1.prod.boltdns.net/v1/static/694940094001/9fa640fa-ab1c-46a0-b204-5b7d89f7bc85/4f0b8a7e-8466-4cca-be05-fe7aa5a8d374/1280x720/match/1024/512/image.jpg?ve=1&tl=1"></NewsItem>
                    </div>
                    <div className="col-md-3 m-3">
                        <NewsItem title="myTitle" description="myDescription" imageUrl="https://storage.googleapis.com/afs-prod/media/d018739a26b3482d8dec8424a663b032/3000.jpeg"></NewsItem>
                    </div>
                </div>
            </div>
        )
    }
}

export default News