import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }
  
  handleFilters = () =>{
    this.setState({
      filter: {
        ...this.state.filters
      }
    })
  }

  handleFetch = () =>{
    let extension = 'pets'

    if(this.state.filters === 'cat'){
      extension = 'pets?type=cat'
    }else if(this.state.filters === 'dog'){
      extension = 'pets?type=dog'
    }else if(this.state.filters === 'micropig'){
      extension = 'pets?type=micropig'
    }else{
      extension = 'pets'
    }
    fetch(`/api/${extension}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          pets: [data]
      })
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                onChangeType={event => this.handleFilters}
                onFindPetsClick={event => this.handleFetch}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
