import './styles.css'

import { Card } from '../Card'
import data from '../../assets/data.json'

export function CardList(props) {
    return (
        <section className='card-list'>
            {data.map(obj => (
                <Card key={obj.id} {...obj} />
            ))}
        </section>
    )
}
