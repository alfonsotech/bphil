import React, { Component } from "react"
// import API from "../../utils/API"
import axios from "axios"
// import Spinner from '../../utils/Spinner'
import EditResource from '../../components/EditResource'
// import RaisedButton from 'material-ui/RaisedButton'
import './Edit.css'

class Edit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      resources: [],
      search: ''
    }
  }

  componentDidMount = () => {
    axios.get('api/resources/new')
    .then( results => {
      const resources = results.data
      this.setState({ resources})
    })

  }

  updateSearch = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  render() {

    let filteredTopics = this.state.resources.filter(
      (resource) => {
        return resource.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
      }
    )

    return (
      <div className="Topics">

          <div className="search-box">
            <input type="text" placeholder="search topics"
              value={this.state.search}
              onChange={this.updateSearch}
              ></input>
            </div>


        <ol>
          {filteredTopics.map( (resource, i) => {
            return (
              <li key={i}>
                <EditResource
                  resource={resource}
                  history={this.props.history} />
                </li>
            )
          })}
      </ol>
    </div>
    )
  }
}
export default Edit
