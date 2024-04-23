import './styles.css'

import { ReactComponent as CloseIcon } from './ic-close-input.svg'
import { ReactComponent as SearchIcon } from './ic-search-input.svg'

export function Search(props) {
    return (
        <form className='search'>
            <input className='search__input' type='text' placeholder='Поиск...' />
            <button className='search__btn'>
                <SearchIcon />
                {false && <CloseIcon />}
            </button>
        </form>
    )
}
