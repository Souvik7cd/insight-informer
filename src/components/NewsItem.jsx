import PropTypes from "prop-types";
import { Component } from "react";

export class NewsItem extends Component {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
    urlToImage: PropTypes.string,
    loading: PropTypes.bool,
  };
  render() {
    let defaultUrlToImage =
      "https://static.vecteezy.com/system/resources/thumbnails/006/299/370/original/world-breaking-news-digital-earth-hud-rotating-globe-rotating-free-video.jpg";
    let { title, description, url, urlToImage, loading } = this.props;
    
    if(String(urlToImage).includes("http://www.cricbuzz.com")) {
      const u = "http://www.cricbuzz.com";
      urlToImage = String(urlToImage).substring(u.length)
    }

    return (
      <div>
        {!loading ? (
          /* Actual Content */
          <div className="card border-0 shadow-sm">
            <img
              src={urlToImage ? urlToImage : defaultUrlToImage}
              className="card-img-top"
              alt={title}
              style={{ maxHeight: "200px", objectFit: "cover" }}
              onError={()=>urlToImage = defaultUrlToImage}
            />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <a href={url} target="_blank" className="btn btn-sm btn-primary">
                Read More...
              </a>
            </div>
          </div>
        ) : (
          /* Placeholder card */
          <div className="card border-0 shadow-sm placeholder-wave">
            <div
              className="card-img-top placeholder d-block"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-body">
              <span className="placeholder col-7"></span>
              <span className="placeholder col-4"></span>
              <span className="placeholder col-4"></span>
              <span className="placeholder col-6"></span>
              <span className="placeholder col-8"></span>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default NewsItem;
