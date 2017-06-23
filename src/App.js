import React from 'react'
import withLoadingSpinner from './hoc/withLoadingSpinner'
import UserProfile from './components/UserProfile'


/**
 * dataLoader()
 *
 * This function mimics the functionality of an ajax call for data. It returns a 
 * Promise, which resolves after 3 seconds and returns a mock user object.
 */

const dataLoader = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => { 
      const user = {
        name: 'John Smith',
        age: 30
      }
      resolve(user)
    }, 3000)
  })
}


/**
 * App - This simple component only renders the UserProfile component
 */

const App = (props) => <UserProfile user={props.data} />


// Instead of exporting the App component itself, we wrap it in our 
// withLoadingSpinner higher-order component
export default withLoadingSpinner(dataLoader)(App)
