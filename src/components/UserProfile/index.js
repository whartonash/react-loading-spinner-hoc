import React from 'react'


/**
 * UserProfile 
 *
 * This is a functional component that expects a user object to be passed via 
 * props. It renders a div element containing some of the user attributes.
 */

const UserProfile = (props) =>
  <div>
    <div>Name: { props.user.name }</div>
    <div>Age: { props.user.age }</div>
  </div>


// Export the UserProfile component for use in the app
export default UserProfile
