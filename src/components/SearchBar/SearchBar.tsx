import { FormEvent, useState } from 'react';
import { GoSearch } from 'react-icons/go';
import toast from 'react-hot-toast';
import css from './SearchBar.module.css';

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar = ({ onSubmit }: SearchBarProps) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();

    if (query.trim() === '') {
      toast('Please enter a search term', {
        duration: 3000,
      });
      return;
    }
    onSubmit(query.trim());
    // setQuery('');
  };

  return (
    <header className={css.searchBar}>
      <form onSubmit={handleSubmit} className={css.searchBarForm}>
        <div className={css.inputWrap}>
          <GoSearch
            className={css.searchBarIcon}
            size={16}
            onClick={ev => handleSubmit(ev)}
          />
          <input
            type="text"
            name="query"
            value={query}
            onChange={e => setQuery(e.target.value.toLowerCase())}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            className={css.searchBarInput}
          />
        </div>
      </form>
    </header>
  );
};

export default SearchBar;
