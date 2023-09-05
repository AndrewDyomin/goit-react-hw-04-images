import { Header, SearchForm, SearchFormButton, SearchFormButtonLabel, SearchFormInput } from './Searchbar.styled';

export const Searchbar = ({ changeQuery }) => {
    return (
    <Header className="searchbar">
        <SearchForm 
        className="form"
        onSubmit={ (evt) => {
            evt.preventDefault();
            changeQuery(evt.target.elements.query.value);
            evt.target.reset();
        }}>
            <SearchFormButton type="submit" className="button">
             <SearchFormButtonLabel className="button-label">Search</SearchFormButtonLabel>
            </SearchFormButton>

            <SearchFormInput
            name="query"
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            />
        </SearchForm>
    </Header>
    );
};
