import React, { useState } from 'react';

const useSearch = (allPosts) => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState('');
  const [searchTimeout, setSearchTimeout] = useState('');
  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = allPosts.filter(
          (item) =>
            item.name.toLowerCase().includes(searchText.toLocaleLowerCase()) ||
            item.prompt.toLocaleLowerCase().includes(searchText.toLowerCase()),
        );
        setSearchResults(searchResult);
      }, 500),
    );
  };
  return { searchText, handleSearchChange, searchResults };
};

export default useSearch;
