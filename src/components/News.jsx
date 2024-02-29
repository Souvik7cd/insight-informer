import PropTypes from "prop-types";
import { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 9,
    category: ''
  }

  static propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string
  };

  constructor() {
    super();
    this.parsedData = {};
    this.state = {
      articles: [],
      loading: true,
      page: 1,
    };
  }

  fetchData = async (pageNum) => {
    this.setState({
      articles: new Array(this.props.pageSize).fill(0),
      loading: true,
    });
    const url = `https://newsapi.org/v2/top-headlines?apiKey=2262522b36384cc7972bd502355c19fb&` + 
                `country=${this.props.country}&`+
                `page=${pageNum}&`+
                `pageSize=${this.props.pageSize}&`+
                `category=${this.props.category}`;
    const data = await fetch(url);
    this.parsedData = await data.json();
    this.setState({
      articles: this.parsedData.articles,
      page: pageNum,
      totalResults: this.parsedData.totalResults,
      loading: false,
    });
  };

  componentDidMount = async () => {
    const pageNum = 1;
    this.fetchData(pageNum);
  };

  handlePrevClick = async () => {    
    window.scrollTo(0, 0);
    const pageNum = this.state.page > 1 && this.state.page - 1;
    this.fetchData(pageNum);
  };

  handleNextClick = async () => {
    window.scrollTo(0, 0);
    const pageNum = this.state.page + 1;
    if (!(pageNum > Math.ceil(this.state.totalResults / this.props.pageSize))) {
      this.fetchData(pageNum);
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h3
          className="mb-3 text-center"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          Top Headlines
        </h3>
        <div className="row">
          {this.state.loading && (
            <div className="container my-2 d-flex justify-content-between">
              <a
                className="btn btn-dark disabled placeholder col-4"
                aria-disabled="true"
                style={{ width: "120px" }}
              ></a>
              <a
                className="btn btn-dark disabled placeholder col-4"
                aria-disabled="true"
                style={{ width: "120px" }}
              ></a>
            </div>
          )}
          {this.state.loading &&
            this.state.articles.map((_, index) => {
              return (
                <div key={index} className="col-lg-4 col-md-6 my-2">
                  <NewsItem loading={this.state.loading} />
                </div>
              );
            })
          }
          {this.state.loading && (
            <div className="container my-2 d-flex justify-content-between">
              <a
                className="btn btn-dark disabled placeholder col-4"
                aria-disabled="true"
                style={{ width: "120px" }}
              ></a>
              <a
                className="btn btn-dark disabled placeholder col-4"
                aria-disabled="true"
                style={{ width: "120px" }}
              ></a>
            </div>
          )}
        </div>

        {!this.state.loading && (
          <div className="row">
            <div className="container my-2 d-flex justify-content-between">
              <button
                disabled={this.state.page === 1}
                className="btn btn-dark"
                style={{ width: "120px" }}
                onClick={this.handlePrevClick}
              >
                &lt; Previous
              </button>
              <button
                disabled={
                  this.state.page + 1 >
                  Math.ceil(this.state.totalResults / this.props.pageSize)
                }
                className="btn btn-dark"
                style={{ width: "120px" }}
                onClick={this.handleNextClick}
              >
                Next &gt;
              </button>
            </div>

            {this.state.articles.map((article) => {
              const { title, description, url, urlToImage } = article;
              return (
                <div key={url} className="col-lg-4 col-md-6 my-2">
                  <NewsItem
                    title={title}
                    description={description?.slice(0, 88) + "..."}
                    urlToImage={urlToImage}
                    url={url}
                  />
                </div>
              );
            })}
            <div className="container mt-2 mb-5 d-flex justify-content-between">
              <button
                disabled={this.state.page === 1}
                className="btn btn-dark me-2"
                style={{ width: "120px" }}
                onClick={this.handlePrevClick}
              >
                &lt; Previous
              </button>
              <button
                disabled={
                  this.state.page + 1 >
                  Math.ceil(this.state.totalResults / this.props.pageSize)
                }
                className="btn btn-dark me-2"
                style={{ width: "120px" }}
                onClick={this.handleNextClick}
              >
                Next &gt;
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default News;
