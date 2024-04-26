import { Logo } from '../Logo'

import './styles.css'

export function Header({ children }) {
    return (
        <header className='header'>
            <div className='header__container container'>
                <div className='header__body'>
                    <Logo />
                    {children}
                </div>
            </div>
        </header>
    )
}
