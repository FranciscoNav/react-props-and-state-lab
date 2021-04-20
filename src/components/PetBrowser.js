import React from 'react'
import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    // console.log(this.props.pets)
    const petCards = this.props.pets.map((p) => <Pet onAdoptPet={this.props.onAdoptPet} pet={p}/> )
    return (
    <div className="ui cards">
      {petCards}
    </div>)
  }
}

export default PetBrowser
