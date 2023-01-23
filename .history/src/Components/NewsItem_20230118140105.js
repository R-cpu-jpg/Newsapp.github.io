import  React, {Component} from 'react'

export class NewsItem extends Component {

    render() {
        let {title, description} = this.props;
        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
                    <img src="https://i.cbc.ca/1.3927994.1620768102!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/thompson-rivers-university.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a href="/" className="btn btn-primary">Go somewhere</a>
                        </div>
                </div>
                <div className="card" style={{width: "18rem"}}>
                    <img src="https://a57.foxnews.com/cf-images.us-east-1.prod.boltdns.net/v1/static/694940094001/9fa640fa-ab1c-46a0-b204-5b7d89f7bc85/4f0b8a7e-8466-4cca-be05-fe7aa5a8d374/1280x720/match/1024/512/image.jpg?ve=1&tl=1" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a href="/" className="btn btn-primary">Go somewhere</a>
                        </div>
                </div>
                <div className="card" style={{width: "18rem"}}>
                    <img src="https://storage.googleapis.com/afs-prod/media/d018739a26b3482d8dec8424a663b032/3000.jpeg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a href="/" className="btn btn-primary">Go somewhere</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
