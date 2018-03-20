import React from 'react'
import Resource from '../Resource'

const Resources = ({resources, history}) => {
  // console.log('history', history);
      return (
        <ol>
          {resources.map( (resource, i) => {
            return (
              <li key={resource._id}>
                <Resource
                  resource={resource}
                  history={history}
                />
              </li>
            )
          }
        )}
      </ol>
      )


}

export default Resources
