import React, { Component } from 'react'
// import API from '../../utils/API'
import axios from 'axios'
import './Submit.css'


class Submit extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      author:'',
      url: '',
      duration:'',
      description: '',
      upvotes: 1,
      notes: '',
      media: '',
      mediaType: '',
      institution: '',
      categories: '',
      path: '',
      position: 0
    }
  }

  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
    console.log('this.state inside handleInputChange', this.state);
  }

  handleFormSubmit = event => {
    event.preventDefault()

    const {title, author, url, duration, description, upvotes, notes, media, mediaType, institution, categories, path, position} = this.state

    axios.post('/api/resources',  {title, author, url, duration, description, upvotes, notes, media, mediaType, institution, categories, path, position})
    .then( data => {
            console.log('form submitted, the following resource was added:', data)
          });
  }

  render() {
    return (
      <div className="Submit">
        <h1>Submit A Resource</h1>

        <form onSubmit={this.handleFormSubmit}>

          <div className="form-group">

            <h4>
              <strong>Path</strong>
            </h4>
            <input
              className="form-control"
              type="text"
              value={this.state.path}
              name="path"
              placeholder="path"
              onChange={this.handleInputChange}
            />

            <h4>
              <strong>Title*</strong>
            </h4>
            <input
              className="form-control"
              type="text"
              value={this.state.title}
              name="title"
              placeholder="Title"
              onChange={this.handleInputChange}
              required
            />

            <h4>
              <strong>Author*</strong>
            </h4>
            <input
              className="form-control"
              type="text"
              value={this.state.author}
              name="author"
              placeholder="Author"
              onChange={this.handleInputChange}
              required
            />

            <h4>
              <strong>Source URL*</strong>
            </h4>
            <input
              className="form-control"
              type="text"
              value={this.state.url}
              name="url"
              placeholder="URL"
              onChange={this.handleInputChange}
              required
            />

            <h4>
              <strong>Description</strong>
            </h4>
            <input
              className="form-control"
              type="text"
              value={this.state.description}
              name="description"
                placeholder="description"
              onChange={this.handleInputChange}
            />

            <h4>
              <strong>Duration</strong>
            </h4>
            <input
              className="form-control"
              type="text"
              value={this.state.duration}
              name="duration"
              placeholder="duration"
              onChange={this.handleInputChange}
            />

            <h4>
              <strong>Media</strong>
            </h4>
            <input
              className="form-control"
              type="text"
              value={this.state.media}
              name="media"
              placeholder="media link"
              onChange={this.handleInputChange}

            />


            <h4>
              <strong>Media Type</strong>
            </h4>
            <input
              className="form-control"
              type="text"
              value={this.state.mediaType}
              name="mediaType"
              placeholder="media type"
              onChange={this.handleInputChange}
            />

            <h4>
              <strong>Institution</strong>
            </h4>
            <input
              className="form-control"
              type="text"
              value={this.state.institution}
              name="institution"
              placeholder="institution"
              onChange={this.handleInputChange}
            />

            <h4>
              <strong>Categories</strong>
            </h4>
            <input
              className="form-control"
              type="text"
              value={this.state.categories}
              name="categories"
              placeholder="categories"
              onChange={this.handleInputChange}
            />
          </div>

          <div className="pull-right">
            <button
              type="submit"
              className="btn btn-lg btn-danger">
              Submit
            </button>
          </div>

        </form>
        <p><small><strong>*required</strong></small></p>
      </div>
    )
  }
}

export default Submit
