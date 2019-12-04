import React from 'react';
import styled from 'styled-components';

const SearchFormStyle = styled.input`
    border-radius: 10px;
    text-align: center;
    width: 80%
    height: 2rem;
    font-size: 1.6rem;
    margin: 0% 10%;
    margin-bottom: 3%;
    padding: 4px;
    border: 2px solid white;
    outline: none;
`

function SearchForm(props) {
    return (
        <section className='search-form'>
            <form>
            <SearchFormStyle
                type='text'
                name='name'
                placeholder='search by username'
                autoComplete='off'
                value={props.searchText}
                onChange={props.handleChanges}
            />
            </form>
            <button onClick={props.fetchUser}>Search</button>
        </section>
    );
}

export default SearchForm;