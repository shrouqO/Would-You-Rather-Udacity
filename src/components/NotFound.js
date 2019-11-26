import React, { Component } from 'react'
import { connect } from 'react-redux'

class NotFound extends Component {
  render() {
    return (
      <div>
        <h3 className='center'>oops! Page doesn't exist!</h3>
       </div>
    )
  }
}

function mapStateToProps({ users }) {
  return {
    users
  }
}

export default connect(mapStateToProps)(NotFound)
