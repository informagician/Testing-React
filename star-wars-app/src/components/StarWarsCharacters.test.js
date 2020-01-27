import React from 'react';
import { render } from '@testing-library/react';
import StarWarsCharacters from './StarWarsCharacters';
//import {getData as mockGetData} from '../api';


//jest.mock('../api');

test('Renders the API output with API output and Previous and Next Buttons', () => {
    
    //mockGetData.mockResolvedValueOnce();
    
    const { getByText } = render(<StarWarsCharacters/>);

    getByText(/Previous/i);
    getByText(/Next/i);
})