import React from 'react'

class Pet extends React.Component {

  buttonClass = () => {

  }
  
  render() {
    let {age, gender, id, isAdopted, name, type, weight} = this.props.pet
    
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {gender === "male" ? '♂' : '♀'}
            {name}
          </a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
          {isAdopted ? (
            <button className="ui disabled button">Already adopted</button>
          ) : (
            <button 
            className="ui primary button"
            onClick={!isAdopted ? () => this.props.onAdoptPet(id) : null}
            >Adopt pet</button>)}
          
        </div>
      </div>
    )
  }
}

export default Pet
