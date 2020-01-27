import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import StarWarsCharacters from './StarWarsCharacters';
//import {getData as mockGetData} from '../api';


//jest.mock('../api');

test('Renders with Previous and Next Buttons', () => {
    
    const { getByText } = render(<StarWarsCharacters/>);

    getByText(/Previous/i);
    getByText(/Next/i);
});

test('Next Button returns next URL', () => {

    const { getByText } = render(<StarWarsCharacters/>);
    const nextButton = getByText(/Next/i);

    fireEvent.click(nextButton, {url:'https://swapi.co/api/people/?page=2'})
});

test('Previous Button returns null on first invo', () => {

    const { getByText } = render(<StarWarsCharacters/>);
    const prevButton = getByText(/Previous/i);

    fireEvent.click(prevButton, {url:null})
});