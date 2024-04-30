import { CardList } from '../CardList'
import { Header } from '../Header'
import { Search } from '../Search'

import { useEffect, useState } from 'react'
import data from '../../assets/data.json'
import { SearchInfo } from '../SearchInfo'

export function App() {
    const [items, setItems] = useState(data)
    const [searchQuery, setSearchQuery] = useState('')

    const handleRequest = () => {
        const filteredItems = data.filter(obj => obj.name.toLowerCase().includes(searchQuery.toLowerCase()))
        setItems(filteredItems)
    }

    const handleInputChange = inputValue => {
        setSearchQuery(inputValue)
    }

    useEffect(() => {
        handleRequest()
    }, [searchQuery])

    return (
        <>
            <Header>
                <Search handleInputChange={handleInputChange} />
            </Header>

            <main className='content container'>
                <SearchInfo searchText={searchQuery} searchCount={items} />
                {/* Sort */}
                <div className='content__cards'>
                    <CardList goods={items} />
                </div>
            </main>
            {/* Footer */}
        </>
    )
}
