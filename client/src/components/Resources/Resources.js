import React from 'react'
import Resource from '../Resource'

const Resources = ({resources, history}) => {
  // console.log('history', history);
      return (
        <ol>
          {resources.map( (resource, i) => {
            return (

                <Resource
                  key={resource._id}
                  resource={resource}
                  history={history}
                />
            
            )
          }
        )}
      </ol>
      )


}

export default Resources
