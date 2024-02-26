//import PropTypes from 'prop-types'
import { Component } from 'react'
import NewsItem from './NewsItem'
import * as output from '../../sampleOutput.json';

export class News extends Component {
  //static propTypes = {}

  constructor() {
    super();
    this.state = {
      articles: output.articles,
      loading: false,
    };
  }

  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=2262522b36384cc7972bd502355c19fb";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles});
  }

  render() {
    return (
      <div className="container my-3">
        <h2 className="mb-3" style={{ fontFamily: "'Cambria', serif" }}>Insight Informer - Top Headlines</h2>
        <div className="row">
          {
            this.state.articles.map(article => {
              const { title, description, url, urlToImage } = article;
              return (
                <div key={url} className="col-lg-4 col-md-6 my-2">
                  <NewsItem title={title} description={description?.slice(0, 88) + "..."} urlToImage={urlToImage} url={url} />
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default News