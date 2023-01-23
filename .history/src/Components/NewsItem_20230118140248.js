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
            </div>
        )
    }
}

export default NewsItem
