import React, { Component } from "react"
// import API from "../../utils/API"
import axios from "axios"

// import Spinner from '../../utils/Spinner'
import Resources from '../../components/Resources'
// import RaisedButton from 'material-ui/RaisedButton'
import './Topics.css'

class Topics extends Component {
  constructor(props) {
    super(props)
    this.state = {
      trendingTopics: [],
      newTopics: [],
      currentView: 'trendingTopics',
      search:''
    }
  }

  componentDidMount = () => {
    axios.all([this.getTrendingTopics(), this.getNewTopics()])
    .then(axios.spread( (trendingTopics, newTopics) => {
      // console.log('trendingTopics: ', trendingTopics)
      // console.log('newTopics: ', newTopics);
      this.setState({
        trendingTopics: trendingTopics.data,
        newTopics: newTopics.data
      })
    }))
    .catch(err => console.log(err))

  }

  getTrendingTopics() {
    return axios.get("/api/resources/trending")
  }

  getNewTopics() {
    return axios.get("/api/resources/new")
  }

  changeView(currentView) {
    this.setState({
      currentView: currentView
    })
  }

  updateSearch = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  render() {



    let filteredTopics = this.state[this.state.currentView].filter(
      (resource) => {
        return resource.description.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
      }
    )

    return (
      <div className="Topics">

        <div className="page-header">
          <h1>Topics are...</h1>
          <h3>... written, audio, or video content, crowd-sourced and upv♥ted by you. Go ahead, click on a topic to check it out. Upvote it if you'd recommend it to others. <a href="/submit">Then submit your favorite topics content here.</a></h3>

          <div className="search-box">
            <input type="text" placeholder="search topics"
              value={this.state.search}
              onChange={this.updateSearch}
              ></input>
            </div>
        </div>


        <button onClick={() => this.changeView('trendingTopics')}  className='header-button'>Trending Topics</button>

        <button onClick={() => this.changeView('newTopics')} className='header-button'>New Topics</button>

        <Resources
          resources={filteredTopics} history={this.props.history}
        />

    </div>
    )
  }
}

export default Topics
