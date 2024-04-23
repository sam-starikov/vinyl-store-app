import './styles.css'

import srcLogo from './ic-logo.svg'

export function Logo() {
    return (
        <a className='logo' href='/'>
            <img className='logo__img' src={srcLogo} alt='Виниловая пластинка' />
        </a>
    )
}
