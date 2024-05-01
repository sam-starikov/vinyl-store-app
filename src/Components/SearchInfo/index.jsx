import './styles.css'
import { normalizeCount } from '../../utils'

export function SearchInfo({ searchText, searchCount }) {
    return (
        searchText && (
            <section className='search-info'>
                <p className='search-info__title'>
                    По запросу <span className='search-info__text'>{searchText}</span> найдено{' '}
                    <span className='search-info__count'>{!!searchCount ? searchCount.length : 0}</span>{' '}
                    {!!searchCount && normalizeCount(searchCount.length, ['товар', 'товара', 'товаров'])}.
                </p>
            </section>
        )
    )
}
