import React, { useState } from 'react';
import './index.css';
import firebase from 'firebase/app';
import 'firebase/database';

export default function JourneyForm(props) {
    // reference into the database
    const journeysRef = firebase.database().ref('journeys');

    const [journeyTitle, setJourneyTitle] = useState('');
    const [petName, setPetName] = useState('');
    const [petType, setPetType] = useState('');
    const [petBreed, setPetBreed] = useState('');
    const [journey, setJourney] = useState('');

    const handleJourneyTitle = (event) => {
        let newValue = event.target.value;

        setJourneyTitle(newValue);
    }

    const handlePetName = (event) => {
        let newValue = event.target.value;

        setPetName(newValue);
    }

    const handlePetType = (event) => {
        let newValue = event.target.value;

        setPetType(newValue);
    }

    const handlePetBreed = (event) => {
        let newValue = event.target.value;

        setPetBreed(newValue);
    }

    const handleJourney = (event) => {
        let newValue = event.target.value;

        setJourney(newValue);
    }

    // adding a new form to the database
    const handleSubmit = (event) => {
        event.preventDefault();
        journeysRef.push({
            petname: petName,
            pettype: petType,
            petbreed: petBreed,
            title: journeyTitle,
            text: journey
        });

        // empty out form for next time
        clearState();
    }

    const clearState = () => {
        setJourneyTitle('');
        setPetBreed('');
        setPetName('');
        setPetType('');
        setJourney('');
    }

    return (
        <div className="submission">
            <form className="submit-journey">
                <h2>Share your Pet Caring Journey with us!</h2>

                <div className="journey-title">
                    <label htmlFor="journey-title-input">Title: </label>
                    <br></br>
                    <input id="journey-title-input" placeholder="Your Story's Title" type="text" name="Journey Title" onChange={handleJourneyTitle} />
                </div>

                <div className="pet-name">
                    <label htmlFor="pet-name-input">Pet Name: </label>
                    <br></br>
                    <input id="pet-name-input" placeholder="Your Pet's Name." type="text" name="Pet Name" onChange={handlePetName} />
                </div>

                <div className="pet-type">
                    <label htmlFor="pet-type-input">Pet Type: </label>
                    <br></br>
                    <select id="pet-type-input" placeholder="Your Pet's Type (e.x. Dog)" type="text" name="pet type" onChange={handlePetType}>
                        <option id="dropdown-initial-state">Select A Pet Type</option>
                        <option id="select-pet-type-dog-yellow" onClick={handlePetType}>Dog (Yellow)</option>
                        <option id="select-pet-type-dog-black" onClick={handlePetType}>Dog (Black)</option>
                        <option id="select-pet-type-dog-white" onClick={handlePetType}>Dog (White)</option>
                        <option id="select-pet-type-cat-yellow" onClick={handlePetType}>Cat (Yellow)</option>
                        <option id="select-pet-type-cat-black" onClick={handlePetType}>Cat (Black)</option>
                        <option id="select-pet-type-cat-white" onClick={handlePetType}>Cat (White)</option>
                    </select>
                </div>

                <div className="pet-breed">
                    <label htmlFor="pet-breed-input">Pet Breed:</label>
                    <br></br>
                    <input id="pet-breed-input" placeholder="e.x. Bulldog" type="text" name="pet breed" onChange={handlePetBreed} />
                </div>

                <div className="journey">
                    <label htmlFor="journey-field">Tell us about your journey!</label>
                    <textarea className="form-control" id="journey-field" name="journey" onChange={handleJourney}></textarea>
                    <br></br>
                    <button type="submit" className="btn btn-primary" onClick={(event) => {
                        handleSubmit(event);
                        window.location.reload();
                        return false;
                    }}>Submit</button>
                </div>
            </form>
        </div>
    );

}

