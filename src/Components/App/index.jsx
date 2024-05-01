import { CardList } from '../CardList'
import { Header } from '../Header'
import { Search } from '../Search'
import { SearchInfo } from '../SearchInfo'
import { api } from '../../utils/Api'

import { useEffect, useState } from 'react'

export function App() {
    const [items, setItems] = useState([])
    const [users, setUsers] = useState(null)
    const [searchQuery, setSearchQuery] = useState('')

    const handleRequest = () => {
        /* const filteredItems = items.filter(obj => obj.name.toLowerCase().includes(searchQuery.toLowerCase()))
        setItems(filteredItems) */

        api.search(searchQuery)
            .then(searchResult => {
                setItems(searchResult)
            })
            .catch(err => console.log(err))
    }

    const handleInputChange = inputValue => {
        setSearchQuery(inputValue)
    }

    useEffect(() => {
        Promise.all([api.getAllData(), api.getUserInfo()])
            .then(([itemsData, usersData]) => {
                setItems(itemsData)
                setUsers(usersData)
                console.log(itemsData, usersData)
            })
            .catch(err => console.log(err))
    }, [])

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
