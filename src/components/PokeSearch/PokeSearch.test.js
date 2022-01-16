import React from 'react';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import PokeSearch from './PokeSearch';

it("Loading is shown until the Pokemon is fetched", async () => {
  render(<PokeSearch />);

  expect(screen.getByText('...Loading...')).toBeInTheDocument();

  await waitForElementToBeRemoved(screen.queryByText('...Loading...'));
});

it("The Pokemon name is displayed correctly after it has been fetched", async () => {
  window.fetch = jest.fn(() => {
    const pokemon = { name: 'bulbasaur', weight: 69, height: 7 };

    return Promise.resolve({
      json: () => Promise.resolve(pokemon),
    });
  });
  render(<PokeSearch />);
  const pokemonName = await screen.findByText('bulbasaur');
  expect(pokemonName).toBeInTheDocument();
});
