import React, { useState } from "react";
import { InputStyle } from './styles/InputStyle'
import { Link } from "react-router-dom";

const InputSearch = props => {

  const [search, setSearch] = useState([]);
  const handleChange = e => setSearch(e.target.value);

  return (
    <InputStyle>
      <input
        onChange={e => handleChange(e)}
        type="text"
        name="search"
        placeholder="Search"
        maxLength="30"
        size="30" />

      <Link to={{ pathname: "/search-results", state: { search } }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M10.502 2C5.80753 2 2.00195 5.80558 2.00195 10.5C2.00195 15.1944 5.80753 19 10.502 19C12.4884 19 14.3169 18.3176 15.7637 17.176L20.5877 22C20.9783 22.3905 21.6114 22.3905 22.002 22C22.3925 21.6095 22.3925 20.9763 22.002 20.5858L17.1779 15.7618C18.3196 14.3149 19.002 12.4865 19.002 10.5C19.002 5.80558 15.1964 2 10.502 2ZM4.00195 10.5C4.00195 6.91015 6.9121 4 10.502 4C14.0918 4 17.002 6.91015 17.002 10.5C17.002 12.2952 16.2755 13.9188 15.0981 15.0962C13.9208 16.2736 12.2972 17 10.502 17C6.9121 17 4.00195 14.0899 4.00195 10.5Z" fill="#20202080" />
        </svg>
      </Link>
    </InputStyle>
  )
}

export default InputSearch;