import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Listitems from '../components/Listitems'
import HomeStore from '../stores/HomeStore'

export default function Home() {
  const store = HomeStore()


  React.useEffect(() => {
    if (store.trending.length == 0) store.fetchcoins()
  }, [])


  return (
    <div>
      <Header />
      <header className='home-search'>
        <div className='width'>
          <h2>Search for coin</h2>
          <input type="text" value={store.query} onChange={store.setQuery} />
        </div>
      </header>
      <div className='homecrypto'>
        <div className='width'>
          <h2>{store.searched ? `Searched reasults` : `Trending Coins`} </h2>
          {store.coins.map(coin => {
            return <Listitems key={coin.id} coin={coin} />
          })}
        </div>
      </div>
    </div>
  );
}
