import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

export function AboutPage() {

    return (
        <div>
            <header className="aboutpage">
                <h1 className="title-details">Pet Story</h1>
                <p className="text-light">Sharing your story with pets. Viewing others' experiences. Welcome to Pets Story</p>
                <NavLink className="get-started" to="/" activeClassName="active-link">Start using Pet Story now!</NavLink>
            </header>

            <section className="toptext">
                <p>Users can post pet caring experience and view experience posted by others by letting users choose sorted categories.
                    When they are looking for other users’ shared experience on this app, they can sort the information by
                    choosing the species or what kind of experience they want to view.
                </p>
            </section>

            <section className="bottomtext">
                <p>This application will provide the pet owners a go-to platform when they are in need of pet care information.
                    They don’t need to go online to search over all the websites and gradually gather the information they need, which is very time consuming.
                    By having this all-in-one platform, pet owners can now get all the
                    information they need simply by sorting and searching keywords
                    to get the solution that best fits the situation they are facing.
                </p>
            </section>
        </div>
    );
}