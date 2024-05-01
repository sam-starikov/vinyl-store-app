import './styles.css'

import { Card } from '../Card'
import { Button } from '../Button'

export function CardList({ goods }) {
    return (
        <section className='card-list'>
            {!!goods &&
                goods.map(obj => (
                    <Card key={obj.id} {...obj}>
                        <Button>
                            <span className='btn__text '>В корзину</span>
                        </Button>
                    </Card>
                ))}
        </section>
    )
}
