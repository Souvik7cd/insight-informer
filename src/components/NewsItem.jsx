import PropTypes from 'prop-types'
import { Component } from 'react'

export class NewsItem extends Component {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
    urlToImage: PropTypes.string
  };
  render() {
    let defaultUrlToImage = "https://static.vecteezy.com/system/resources/thumbnails/006/299/370/original/world-breaking-news-digital-earth-hud-rotating-globe-rotating-free-video.jpg";
    let { title, description, url, urlToImage } = this.props;
    return (
      <div>
        <div className="card border-0 shadow-sm">
          <img src={ urlToImage ? (urlToImage) : (defaultUrlToImage) } 
            className="card-img-top" alt={title} style={{ maxHeight: "200px", objectFit: "cover" }}
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={url} target="_blank" className="btn btn-sm btn-primary">Read More...</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem