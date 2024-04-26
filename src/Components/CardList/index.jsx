import './styles.css'

import { Card } from '../Card'
import { Button } from '../Button'

export function CardList({ goods }) {
    return (
        <section className='card-list'>
            {goods.map(obj => (
                <Card key={obj.id} {...obj}>
                    <Button text='В корзину' />
                </Card>
            ))}
        </section>
    )
}
