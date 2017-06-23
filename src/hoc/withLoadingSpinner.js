import React, { PureComponent } from 'react'
import Spinner from '../components/Spinner'


/**
 * withLoadingSpinner
 *
 * The withLoadingSpinner higher-order component is a function that takes an 
 * OriginalComponent and returns a new EnhancedComponent in its place
 */

const withLoadingSpinner = (dataLoader) => (OriginalComponent) => {


  // We define a new EnhancedComponent component inside the HOC
  class EnhancedComponent extends PureComponent {

    // This EnhancedComponent will require local state to keep track of progress
    // loading the required data.
    state = {
      isLoading: true, // an isLoading flag
      data: null       // the data loaded
    }

    // When this EnhancedComponent is being mounted into the DOM, it will 
    // trigger the dataLoader() call to fetch the data required by the 
    // OriginalComponent. When the return Promise resolves it will update the 
    // EnhancedComponent state with the required data and set isLoading to false.
    componentWillMount() {
      dataLoader().then(data => this.setState({
        isLoading: false,
        data
      }))
    }

    // The render function implements a terniary operator, returning a Spinner 
    // component if the EnhancedComponent is still loading the required data, or
    // the OriginalComponent, passing in the loaded data as a prop once it is
    // available.
    render() {
      return this.state.isLoading ? <Spinner /> : <OriginalComponent {...this.props} data={this.state.data} />
    }

  }


  // We return the EnhancedComponent instead of the OriginalComponent
  return EnhancedComponent

}


/**
 * Export the withLoadingSpinner HOC for use with various components within the
 * application
 */

export default withLoadingSpinner
