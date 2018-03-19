import React, { Component } from "react"
import API from "../../utils/API"
import axios from "axios"
// import Spinner from '../../utils/Spinner'
import EditResource from '../../components/EditResource'
// import RaisedButton from 'material-ui/RaisedButton'
import './Edit.css'

class Edit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // resources: [],
      trendingTopics: [],
      newTopics: [],
      view: 'trendingTopics'
    }
  }

  componentDidMount = () => {
    axios.all([API.getTrendingTopics(), API.getNewTopics()])
    .then(axios.spread( (trendingTopics, newTopics) => {
      this.setState({
        trendingTopics: trendingTopics.data,
        newTopics: newTopics.data
      })
    }))
    .catch(err => console.log(err))

  }

  changeView(view) {
    console.log('change view clicked');
    this.setState({view: view})
  }

  render() {

    return (
      <div className="Topics">

        <button onClick={() => this.changeView('newTopics')} label="Trending Topics" className='header-button'>Trending Topics</button>

        <button onClick={() => this.changeView('trendingTopics')} label="New Topics" className='header-button'>New Topics</button>

        {/* category filter */}
        <ol>
          {this.state[this.state.view].map( (resource, i) => {
            return (
              <li key={i}>
              <EditResource resource={resource} />
                </li>
            )
          })}
      </ol>
    </div>
    )
  }
}
export default Edit
