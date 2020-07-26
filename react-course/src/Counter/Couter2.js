import React from 'react'
import {clikedContext} from '../App'

export default props => {
    return (
      <div style={{
          border: '1px solid #ccc',
          width: '200px',
          margin: '0 auto'
      }}> 
        <h3>Counter 2</h3>
        <clikedContext.Consumer>
          {cliked => cliked ? <p>Clicked</p> : null }
        </clikedContext.Consumer>

      </div>
    )
}