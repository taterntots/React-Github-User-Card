import React from 'react';
import styled from 'styled-components';

const SearchFormStyle = styled.input`
    border-radius: 10px;
    text-align: center;
    width: 80%
    height: 2rem;
    font-size: 1.6rem;
    margin: 0% 10%;
    padding: 4px;
    border: 2px solid white;
    outline: none;
`
const ButtonContainer = styled.div`
    text-align: center;
`
export const ButtonStyling = styled.button`
    text-align: center;
    background-color: #708090;
    color: white;
    padding: 8px 0px;
    margin: 3%;
    border-radius: 7px;
    font-size: 1.9rem;
    width: 200px;
    border: 2px solid #22283A;
    outline: none;

    &:hover {
        background-color: white;
        color: #708090;
    }
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
                <ButtonContainer>
                    <ButtonStyling onClick={props.fetchUser}>Search</ButtonStyling>
                </ButtonContainer>
            </form>
        </section>
    );
}

export default SearchForm;