import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { allNews } from '../store/actions/newsAction';

const Filter = () => {
  const [selectedSorting, setSelectedSorting] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const dispatch = useDispatch()

  const sortBy = ['relevancy', 'popularity', 'publishedAt'];

  const handleCategoryChange = (category) => {
    setSelectedSorting(category);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleApplyFilters = ()=>{
    if(selectedSorting !=''||selectedDate !=''){
      dispatch(allNews({selectedSorting,selectedDate}))
    }
  }

 

  return (
    <div className="fixed left-0 top-[10%] bg-zinc-50 border-r border-zinc-100 w-[20rem] h-[80%] px-6 py-4 ">
      <h1 className="text-xl font-semibold text-sky-800 mb-4">Filters</h1>

      {/* sortBy */}
      <div className="mb-6">
        <label htmlFor="sortBy" className="block text-sm ml-1 text-sky-800 mb-.5 ">sortBy</label>
        <div className="space-y-2  space-x-1">
          {sortBy.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={` text-left px-3 py-2 w-max rounded-full  text-sm font-medium transition
                ${selectedSorting === category ? 'bg-sky-800 text-white' : 'bg-zinc-100 text-zinc-800 hover:bg-sky-800 hover:text-white'}`}
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
        onClick={handleApplyFilters}
        className="w-full px-3 py-2.5 uppercase text-sm font-medium text-white bg-sky-800 rounded-full shadow-md hover:bg-sky-700"
      >
        Apply Filters
      </button>
      <button
        onClick={() => {
          setSelectedSorting('');
          setSelectedDate('');
          setSearchKeyword('');
        }}
        className="w-full px-3 mt-2 py-2.5 uppercase text-sm font-medium text-white bg-sky-800 rounded-full shadow-md hover:bg-sky-700"
      >
        Reset Filters
      </button>
    </div>
  );
};

export default Filter;
