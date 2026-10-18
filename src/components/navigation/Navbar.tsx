import { Menu, Search, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useMemo, useRef, useState } from 'react';
import { navigationItems, type SearchItem } from '../../data/cobesContent';

type NavbarProps = {
  currentPage: string;
  searchItems?: SearchItem[];
  onSearchNavigate?: (item: SearchItem) => void;
};

export function Navbar({ currentPage, searchItems = [], onSearchNavigate }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [highlightedResult, setHighlightedResult] = useState(0);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return searchItems.slice(0, 6);

    return searchItems
      .filter((item) => `${item.label} ${item.detail} ${item.category}`.toLowerCase().includes(normalized))
      .slice(0, 8);
  }, [query, searchItems]);



  useEffect(() => {
    const closeOnOutsideClick = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) setSearchOpen(false);
    };
    document.addEventListener('mousedown', closeOnOutsideClick);
    return () => document.removeEventListener('mousedown', closeOnOutsideClick);
  }, []);

  useEffect(() => {
    setHighlightedResult(0);
  }, [query]);

  const openSearch = () => {
    setSearchOpen(true);
    window.setTimeout(() => inputRef.current?.focus(), 0);
  };

  const selectResult = (item: SearchItem) => {
    onSearchNavigate?.(item);
    setQuery('');
    setSearchOpen(false);
    setMobileOpen(false);
  };

  const onSearchKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Escape') {
      setSearchOpen(false);
      inputRef.current?.blur();
    }
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setHighlightedResult((current) => Math.min(current + 1, Math.max(results.length - 1, 0)));
    }
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      setHighlightedResult((current) => Math.max(current - 1, 0));
    }
    if (event.key === 'Enter' && results[highlightedResult]) {
      event.preventDefault();
      selectResult(results[highlightedResult]);
    }
  };

  return (
    <header className="cobes-nav" aria-label="Primary navigation">
      <div className="cobes-nav__inner">
        <Link to="/" className="cobes-nav__brand" aria-label="Shaonova home"><img src="/cobes-data/shao-imgs/shaonova-logo.png" alt="Shaonova" /></Link>

        <nav className="cobes-nav__links" aria-label="Section navigation">
          {navigationItems.map((item) => (
            <Link key={item.target} to={item.path} className={currentPage === item.target ? 'is-active' : undefined} aria-current={currentPage === item.target ? 'page' : undefined}>{item.label}</Link>
          ))}
        </nav>

        {onSearchNavigate && (
        <div ref={searchRef} className={`cobes-search ${searchOpen ? 'is-open' : ''}`}>
          <button type="button" className="cobes-search__toggle" onClick={openSearch} aria-label="Search site content" aria-expanded={searchOpen}>
            <Search aria-hidden="true" size={18} />
            <span>Search</span>
          </button>
          <div className="cobes-search__input-wrap">
            <Search aria-hidden="true" size={17} />
            <input
              ref={inputRef}
              value={query}
              onFocus={() => setSearchOpen(true)}
              onChange={(event) => setQuery(event.target.value)}
              onKeyDown={onSearchKeyDown}
              placeholder="Search COBES"
              aria-label="Search COBES content"
              aria-autocomplete="list"
              aria-controls="cobes-search-results"
              aria-activedescendant={searchOpen && results[highlightedResult] ? `cobes-search-result-${highlightedResult}` : undefined}
            />
            <button type="button" className="cobes-search__close" onClick={() => setSearchOpen(false)} aria-label="Close search">
              <X aria-hidden="true" size={16} />
            </button>
          </div>
          {searchOpen && (
            <div id="cobes-search-results" className="cobes-search__results" role="listbox" aria-label="Search suggestions">
              {results.length ? results.map((item, index) => (
                <button
                  id={`cobes-search-result-${index}`}
                  key={`${item.category}-${item.label}-${item.target}`}
                  type="button"
                  role="option"
                  aria-selected={index === highlightedResult}
                  className={index === highlightedResult ? 'is-highlighted' : undefined}
                  onMouseEnter={() => setHighlightedResult(index)}
                  onClick={() => selectResult(item)}
                >
                  <span>{item.category}</span>
                  <strong>{item.label}</strong>
                  <small>{item.detail}</small>
                </button>
              )) : <p>No matching content yet.</p>}
            </div>
          )}
        </div>

        )}

        <button
          type="button"
          className="cobes-nav__menu-toggle"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X aria-hidden="true" size={21} /> : <Menu aria-hidden="true" size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="cobes-nav__mobile-links" aria-label="Mobile section navigation">
          {navigationItems.map((item) => (
            <Link key={item.target} to={item.path} onClick={() => setMobileOpen(false)}>{item.label}</Link>
          ))}
        </nav>
      )}
    </header>
  );
}
