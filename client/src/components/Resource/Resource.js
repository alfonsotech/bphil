import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import FlatButton from 'material-ui/FlatButton'
import axios from "axios"
import './Resource.css'

const customContentStyle = {
  width: '90%',
  maxWidth: 'none',
};

class Resource extends Component {
  constructor(props) {
    super(props)
    this.state = {
      _id: '',
      title: '',
      author:[],
      url: '',
      duration:'',
      description: '',
      upvotes: 0,
      views: 0,
      notes: '',
      media: '',
      mediaType: '',
      institution: '',
      categories: [],
      level: '',
      path: [],
      position: 0,
      pathPosition: [],
      open:false
    }
  }

  componentDidMount = () => {
    const { resource } = this.props
    this.setState({
      _id: resource._id,
      title: resource.title,
      author:resource.author,
      url: resource.url,
      duration: resource.duration,
      description: resource.description,
      upvotes: resource.upvotes,
      views: resource.views,
      notes: resource.notes,
      media: resource.media,
      mediaType: resource.mediaType,
      institution: resource.institution,
      categories: resource.categories,
      level: resource.level,
      path: resource.path,
      position: resource.position,
      pathPosition: resource.pathPosition
    })
  }

  handleUpvote = () => {
    const upvoted = this.state.upvotes + 1
    this.setState({upvotes:upvoted})
    axios.put("/api/resources/" + this.state._id, {
      upvotes: upvoted
    })
    this.props.history.push('/topics')
    // this.context.history.push('/topics')
  }

  handleUpViews = () => {
    const viewed = this.state.views + 1
    this.setState({views:viewed})
    axios.put("/api/resources/" + this.state._id, {
      views: viewed
    })
  }

  handleOpen = () => {
    this.handleUpViews()
    if(this.state.media) {
      window.open(this.state.media)
    } else {
      this.setState({open: true});
    }
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {

    // console.log('this.props inside resource component', this.props.history);

    return (
      <MuiThemeProvider>
       <div className="Resource">
         <div className="upvote-button">
           <button type="submit" onClick={this.handleUpvote} className="heart"> ♥ </button>
         </div>
         <div className="resource-body">
           <h5 onClick={this.handleOpen} className={this.state.category}>
             <span>{this.state.title}</span>
             <span>  | </span>
             <span>{this.state.author}</span>
             <span><small>  ({this.state.mediaType}) </small></span>
           </h5>
           <small>
             <p>
               <span>upv♥tes: {this.state.upvotes}</span>
               <span> | </span>
               <span>views: {this.state.views}</span>
               <span> | </span>
               <span>duration: {this.state.duration}</span>
             </p>
           </small>
         </div>

         <Dialog
           title={this.state.title}
           modal={false}
           open={this.state.open}
           contentStyle={customContentStyle}
           onRequestClose={this.handleClose}
           autoScrollBodyContent={true}
         >
           <div className="resource-content resource-content-16x9 resource-content-4x3">
             <iframe title={this.state.title} src={this.state.url} allow="autoplay; encrypted-media" allowFullScreen></iframe>
           </div>
           <small><small><a className="under-link" href={this.state.url} target="_blank"><p className="pull-right">{this.state.url}</p></a></small></small>

           <p className="description">
             {this.state.description}
           </p>
           <hr />

           <div className="resource-notes">
             <form>
              <label>
                Annotate:
                <textarea value={this.state.value} onChange={this.handleChange} />
              </label>
              <input type="submit" value="Submit" />
            </form>
             <h2>Notes</h2>
           <div>{this.state.notes}</div>
           </div>

           <FlatButton type="text">Report Broken Link</FlatButton>
         </Dialog>

       </div>
      </MuiThemeProvider>
    )
  }
}

export default Resource
