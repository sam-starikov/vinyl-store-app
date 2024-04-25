import { CardList } from '../CardList'
import { Header } from '../Header'

export function App() {
    return (
        <>
            <Header />
            <main className='content container'>
                {/* Sort */}
                <div className='content__cards'>
                    <CardList />
                </div>
            </main>
            {/* Footer */}
        </>
    )
}
