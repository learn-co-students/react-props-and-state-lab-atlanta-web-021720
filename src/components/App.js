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

  //How does it know target...value???
  onChangeType = ({ target: { value } }) => {
    this.setState({ filters: { type: value } });
  };

  //Fetch Pets Conditional
  fetchPets = () => {
    let petURL = "/api/pets"
    let specficPetUrl = `/api/pets?type=${this.state.filters.type}`
    let fetchURL = ""
    this.state.filters.type === "all" ? fetchURL = petURL : fetchURL = specficPetUrl
    fetch(fetchURL)
      .then(resp => resp.json())
      .then(returnedPets => {
        this.setState({ pets: returnedPets })
      })
  }

  //Adopt Function
  onAdoptPet = (petID) => {
    let updatedPets = this.state.pets.map(pet => {
      return pet.id === petID ? { ...pet, isAdopted: true } : pet
    })
    this.setState({ pets: updatedPets })
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
                onChangeType={this.onChangeType}
                onFindPetsClick={this.fetchPets}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                pets={this.state.pets}
                onAdoptPet={this.onAdoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
