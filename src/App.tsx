/**
 * Renders the games catalogue and its publisher filter.
 */
import { useMemo, useState } from 'react';
import { filterGames, games } from './lib/games';

const publishers = [...new Map(games.map((game) => [game.publisherId, game.publisherName]))];

export default function App() {
  const [publisherId, setPublisherId] = useState('all');
  const filteredGames = useMemo(() => filterGames(games, publisherId), [publisherId]);

  return (
    <main className="catalogue">
      <header>
        <p className="eyebrow">DevDays collection</p>
        <h1>Explore games</h1>
        <p className="intro">Browse the catalogue and narrow it down by publisher.</p>
      </header>

      <section className="controls" aria-labelledby="filter-heading">
        <h2 id="filter-heading">Filter games</h2>
        <label htmlFor="publisher-filter">Publisher</label>
        <select
          id="publisher-filter"
          value={publisherId}
          onChange={(event) => setPublisherId(event.target.value)}
        >
          <option value="all">All publishers</option>
          {publishers.map(([id, name]) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </select>
      </section>

      <section aria-live="polite" aria-labelledby="games-heading">
        <div className="results-heading">
          <h2 id="games-heading">Games</h2>
          <span>{filteredGames.length} results</span>
        </div>
        {filteredGames.length === 0 ? (
          <p className="empty-state">No games match this publisher.</p>
        ) : (
          <div className="games-grid">
            {filteredGames.map((game) => (
              <article className="game-card" key={game.id}>
                <p className="game-genre">{game.genre}</p>
                <h3>{game.title}</h3>
                <p>{game.publisherName}</p>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
