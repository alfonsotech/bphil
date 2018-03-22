import React from 'react'
import EditResource from '../EditResource'

const EditResources = ({resources, history}) => {
  // console.log('history', history);
  console.log('resources', resources);
  return (
    <ol>
      {resources.map( (resource, i) => {
        return (
          <li key={resource._id}>
            <EditResource
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

export default EditResources
