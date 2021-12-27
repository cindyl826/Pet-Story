import React, { useState, useEffect } from 'react';
import './index.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardBody } from 'reactstrap';
import firebase from 'firebase/app';

// a list of card that have been posted
export function JourneyDeck() {
    const [journeys, setJourney] = useState(null)
    useEffect(() => {
        const ref = firebase.database().ref('journeys')
        ref.on('value', (snapshot) => {
            const theJourneyObj = snapshot.val() // converting it into a JS value
            let objectKeyArray = Object.keys(theJourneyObj)
            let journeyArray = objectKeyArray.map((key) => {
                let singleJourneyObj = theJourneyObj[key]
                singleJourneyObj.key = key
                return singleJourneyObj;
            })

            setJourney(journeyArray);
        })
    }, [])

    // taking an object and render as card
    let journeyItems = [];
    if (journeys !== null) {
        journeyItems = journeys.map((journeyObj) => {
            return <PetCard key={journeyObj.key} journey={journeyObj} />
        })
    }

    return (
        <>
            {journeys && <div className="journey-cards">
                <div className="card-container">
                    {journeyItems}
                </div>
            </div>}
        </>

    );
}

// creates a card for the pet
function PetCard(props) {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    let thePet = props.journey;
    let petName = thePet.petname;
    let petID = thePet.id;
    let petType = thePet.pettype;
    let petBreed = thePet.petbreed;
    let petImg = "";
    if (petType === "Dog (Yellow)") {
        petImg = "SampleCard1.jpg";
    } else if (petType === "Dog (Black)") {
        petImg = "SampleCard2.jpg";
    } else if (petType === "Dog (White)") {
        petImg = "SampleCard6.jpg";
    } else if (petType === "Cat (Yellow)") {
        petImg = "SampleCard3.jpg";
    } else if (petType === "Cat (Black)") {
        petImg = "SampleCard4.jpg";
    } else if (petType === "Cat (White)") {
        petImg = "SampleCard5.jpg";
    }

    return (
        <div className="card">
            <img src={petImg} alt={"journey " + petID + " image from unsplash"} />
            <p className="card-text">{"Pet Name: " + petName}</p>
            <p className="card-text">{"Pet Type: " + petType}</p>
            <p className="card-text">{"Pet Breed: " + petBreed}</p>
            <Button className="view" color="primary" onClick={toggle}>View Journey!</Button>
            <Modal isOpen={modal} toggle={toggle} className="journy-detail">
                <ModalHeader toggle={toggle}>{thePet.title}</ModalHeader>
                <ModalBody>
                    <Card>
                        <img src={petImg} alt={"journey " + petID + " image from unsplash"} />
                        <CardBody>
                            <p className="card-text">{"Pet Name: " + petName}</p>
                            <p className="card-text">{"Pet Type: " + petType}</p>
                            <p className="card-text">{"Pet Breed: " + petBreed}</p>
                            <br className="line-spacing"></br>
                            <p className="card-text">Journey with the pet:</p>
                            <p className="card-text">{thePet.text}</p>
                        </CardBody>
                    </Card>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggle}>Go Back</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}