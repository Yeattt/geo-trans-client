import { useState, useEffect } from 'react';
import { MdContentPasteSearch } from 'react-icons/md';

export const RolesSearcher = ({ handleQueryResults, roles }) => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (inputValue.trim() === '') return handleQueryResults(roles);

    const filteredRoles = roles.filter(({ nombre }) => {
      return nombre.toLowerCase().includes(inputValue.toLowerCase());
    });

    handleQueryResults(filteredRoles);
  }, [inputValue]);

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  }

  return (
    <form>
      <div className="bg-white rounded-full text-black border-2 border-gray-300 focus-within:border-primary transition w-72 h-10 flex items-center">
        <input
          className="bg-transparent rounded-full w-[87%] h-full px-4 pl-5 py-3 pb-3 text-[15px]"
          type="text"
          placeholder={`Buscar rol...`}
          value={inputValue}
          onChange={onInputChange}
        />

        <div className="bg-primary transition rounded-full hover:bg-primaryHover w-[14%] mr-[-1px] h-[104%] border-l flex items-center justify-center cursor-pointer">
          <MdContentPasteSearch
            className="text-xl text-white"
          />
        </div>
      </div>
    </form>
  );
}