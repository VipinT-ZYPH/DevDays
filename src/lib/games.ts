/**
 * Defines game records and pure publisher filtering behavior.
 */
export interface Game {
  id: number;
  title: string;
  publisherId: number;
  publisherName: string;
  genre: string;
}

export const games: Game[] = [
  { id: 1, title: 'Skybound', publisherId: 1, publisherName: 'Northstar', genre: 'Adventure' },
  { id: 2, title: 'Circuit Breakers', publisherId: 2, publisherName: 'Pixel Forge', genre: 'Strategy' },
  { id: 3, title: 'Moonlit Vale', publisherId: 1, publisherName: 'Northstar', genre: 'RPG' },
  { id: 4, title: 'Meadow Run', publisherId: 3, publisherName: 'Bright Lantern', genre: 'Puzzle' },
];

/**
 * Filters games by publisher, returning every game when no publisher is selected.
 *
 * @param records Game records to filter.
 * @param publisherId Selected publisher identifier, or "all".
 * @returns The records matching the selected publisher.
 */
export function filterGames(records: Game[], publisherId: string): Game[] {
  if (publisherId === 'all') {
    return records;
  }

  return records.filter((game) => game.publisherId === Number(publisherId));
}
