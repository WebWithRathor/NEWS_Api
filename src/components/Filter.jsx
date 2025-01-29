import React, { useState } from 'react';

const Filter = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [searchKeyword, setSearchKeyword] = useState('');

  const categories = ['Technology', 'Business', 'Health', 'Science', 'Sports', 'Entertainment'];

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchKeyword(event.target.value);
  };

  return (
    <div className="fixed left-0 top-[10%] bg-zinc-50 border-r border-zinc-100 w-[20rem] h-[80%] px-6 py-4 ">
      <h1 className="text-xl font-semibold text-sky-800 mb-4">Filters</h1>

      {/* Categories */}
      <div className="mb-6">
        <label htmlFor="categories" className="block text-sm ml-1 text-sky-800 mb-.5 ">Categories</label>
        <div className="space-y-2  space-x-1">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={` text-left px-3 py-2 w-max rounded-full  text-sm font-medium transition
                ${selectedCategory === category ? 'bg-sky-800 text-white' : 'bg-zinc-100 text-zinc-800 hover:bg-sky-800 hover:text-white'}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Date Filter */}
      <div className="mb-6">
        <label htmlFor="date" className="block text-sm ml-1 text-sky-800 mb-.5 ">Filter by Date</label>
        <input
          id="date"
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
          className="w-full px-3 py-2 border border-zinc-100 outline-none rounded-full shadow-sm"
        />
      </div>

      {/* Reset Filters */}
      <button
        onClick={() => {
          setSelectedCategory('');
          setSelectedDate('');
          setSearchKeyword('');
        }}
        className="w-full px-3 py-2.5 uppercase text-sm font-medium text-white bg-sky-800 rounded-full shadow-md hover:bg-sky-700"
      >
        Reset Filters
      </button>
    </div>
  );
};

export default Filter;
