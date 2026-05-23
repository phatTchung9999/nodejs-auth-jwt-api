import React from 'react'
import AddItem from './AddItem';
import Content from './Content';
import SearchItem from './SearchItem';

const Employees = ({
    items,
    search,
    setSearch,
    newItem, 
    setNewItem, 
    handleSubmit, 
    isLoading, 
    fetchError, 
    handleChange, 
    handleDelete}) => {
    return (
        <>
            <AddItem
                newItem={newItem}
                setNewItem={setNewItem}
                handleSubmit={handleSubmit}
            />
            <div>
            <SearchItem
                search={search}
                setSearch={setSearch}
            />
            </div>
            <main className='App-content'>
                {isLoading && <p>Loading Item...</p>}
                {fetchError && <p style={{ color: 'red' }}>{`Error: ${fetchError}`}</p>}
                {!fetchError && !isLoading &&
                    <Content
                        items={items.filter(item => ((item.firstname).toLowerCase()).includes(
                            search.toLowerCase()
                        ))}

                        handleChange={handleChange}
                        handleDelete={handleDelete}
                    />
                }
            </main>
        </>
    )
}

export default Employees
