import React from 'react'
import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    return (
    <div className="ui cards">
      <Pet onAdoptPet={this.props.onAdoptPet}/>
    </div>)
  }
}

export default PetBrowser
