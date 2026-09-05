/**
 * Tests publisher filtering behavior for game records.
 */
import { describe, expect, it } from 'vitest';
import { filterGames, games } from './games';

describe('filterGames', () => {
  it('returns all games when all publishers are selected', () => {
    expect(filterGames(games, 'all')).toEqual(games);
  });

  it('returns only games from the selected publisher', () => {
    expect(filterGames(games, '1').map((game) => game.title)).toEqual(['Skybound', 'Moonlit Vale']);
  });

  it('returns an empty list when no games match', () => {
    expect(filterGames(games, '999')).toEqual([]);
  });
});
