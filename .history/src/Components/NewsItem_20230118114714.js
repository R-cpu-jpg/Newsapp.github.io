import  React, { component} from 'react'

export class NewsItem extends Component {

    render() {
        let{title, description} = this.props;
        return (
            <div>
                <div classNameName="card" style={{width: "18rem"}}>
                    <img src="..." className="card-img-top" alt="...">
                        <div className="card-body">
                            <h5 className="card-title">Title</h5>
                            <p className="card-text">Description</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
