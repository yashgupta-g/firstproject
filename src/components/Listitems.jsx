import React from 'react'
import { Link } from 'react-router-dom'

export default function Listitems({ coin }) {
  return (
    <div className='homecrypto'>

      <Link to={`/${coin.id}`}>
        <span className='homecryptoimage'><img src={coin.image} />  </span>
        <span className='homecryptoname'> {coin.name} </span>
        {coin.priceBtc &&
          <span className='homecryptoprice'>
            <span className='homecryptobtc'>
              <img src="/bitcoin.webp" />
              {coin.priceBtc} BTC
            </span>
            <span className='homecryptousd '>{coin.priceUsd} USD</span>
          </span>
        }
      </Link>
    </div>
  )
}
