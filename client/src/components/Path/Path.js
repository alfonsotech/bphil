import React, { Component } from 'react'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import axios from "axios"
import './Path.css'

class Path extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <div className="path-element">
      <Card>
        <CardHeader
          title="Path Title"
          subtitle="Creator Name"
          actAsExpander={true}
          showExpandableButton={true}
        />
        {/* <CardActions>
          <FlatButton label="Action1" />
          <FlatButton label="Action2" />
        </CardActions> */}
        <CardText expandable={true}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
      </Card>

    </div>
    </MuiThemeProvider>
    )
  }
}

export default Path
