import Search from '../assets/search-icon.png';

export default function SearchBar() {
    return (
        <div className="search-bar">
            <input type="text" placeholder='Search' />
            <img className='search-icon' src={Search} alt="search" />
        </div>
    )
}
