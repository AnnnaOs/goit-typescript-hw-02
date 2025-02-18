import { FormEvent, useState } from 'react';
import toast from 'react-hot-toast';
import { GoSearch } from 'react-icons/go';
import css from './SearchBar.module.css';

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar = ({ onSubmit }: SearchBarProps) => {
  const [query, setQuery] = useState<string>('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (query.trim() === '') {
      toast('Please enter a search term', {
        duration: 3000,
      });
      return;
    }
    onSubmit(query.trim());
    setQuery('');
  };

  return (
    <header className={css.searchBar}>
      <form className={css.searchBarForm} onSubmit={handleSubmit}>
        <div className={css.inputWrap}>
          <GoSearch
            className={css.searchBarIcon}
            size={16}
            onClick={e => handleSubmit(e)}
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
