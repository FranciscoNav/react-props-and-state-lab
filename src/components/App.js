import React from 'react'
import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {

    state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  
  handleFilters = (newType) =>{
    this.setState({
      filters: {
        type: newType}
    })
  }

  handleFetch = () =>{
    let extension = 'pets'

    if(this.state.filters.type === 'cat'){
      extension = 'pets?type=cat'
    }else if(this.state.filters.type === 'dog'){
      extension = 'pets?type=dog'
    }else if(this.state.filters.type === 'micropig'){
      extension = 'pets?type=micropig'
    }else{
      extension = 'pets'
    }
    fetch(`/api/${extension}`)
      .then(response => response.json())
      .then(data => {
        //console.log(data)
        this.setState({
          pets: data
      })
    })
  }

  handleAdoption =(id) =>{
    //console.log('adopting', id)
    let petsObj = this.state.pets.map(e => {
      if (e.id === id){
        return {...e,
          isAdopted:true}
      }else{
        return e
      }
    }) 
    this.setState({
      pets: petsObj
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
                onChangeType={this.handleFilters}
                onFindPetsClick={this.handleFetch}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.handleAdoption} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
