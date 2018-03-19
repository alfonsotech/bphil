import React, { Component } from "react"
import Path from '../../components/Path'
import './Paths.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'

class Paths extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <RaisedButton
          className='request-path-button'
          type="text"
          // onClick={this.handleOpen}
          label="Request Path"
        />
      <div className="Paths">
        <h1>Paths Page</h1>
        <button onClick={() => this.changeView('newTopics')} label="Trending Topics" className='header-button'>Featured Paths</button>
        <button onClick={() => this.changeView('newTopics')} label="Trending Topics" className='header-button'>Popular Paths</button>
        <button onClick={() => this.changeView('trendingTopics')} label="New Topics" className='header-button'>New Paths</button>
        <div className="paths-elements">

              <Path />
              <Path />
              <Path />
              <Path />
              <Path />
              <Path />


        </div>



    </div>
  </MuiThemeProvider>
    )
  }
}

export default Paths
