import { Logo } from '../Logo'
import { Search } from '../Search'

import './styles.css'

export function Header(props) {
    return (
        <header className='header'>
            <div className='header__container container'>
                <div className='header__body'>
                    <Logo />
                    <Search />
                </div>
            </div>
        </header>
    )
}
