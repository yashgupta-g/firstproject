import React from 'react'
import { useParams } from 'react-router-dom';
import ShowStore from '../stores/ShowStore.js';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import Header from '../components/Header'

export default function Show() {
  const store = ShowStore();
  const params = useParams();
  React.useEffect(() => {
    store.fetchdata(params.id)
    return () => {
      store.reset();
    }
  }, [params]);


  return (
    <>
      <Header back />
      {store.data && <>



        <header className='showheader'>
          <img src={store.data.image.large} />
          <h3>
            {store.data.name} ({store.data.symbol})
          </h3>
        </header>
        <div className='width'>
          <div className='showgraph'>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart

                data={store.graphdata}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }} >
                <XAxis dataKey="Date" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="price" stroke="lightgreenlue" fill="lightgreen" />
              </AreaChart>

            </ResponsiveContainer>
          </div>
        </div>

        <div className='showdetails'>
          <div className='width'>
            <h2>Details</h2>



            <div className='showdetailsrow'>
              <h3>Market Cap Rank</h3>
              <span>${store.data.market_cap_rank}</span>
            </div>


            <div className='showdetailsrow'>
              <h3>24hr Low</h3>
              <span>${store.data.market_data.low_24h.usd}</span>
            </div>


            <div className='showdetailsrow'>
              <h3>24hr High</h3>
              <span>${store.data.market_data.high_24h.usd}</span>
            </div>


            <div className='showdetailsrow'>
              <h3>Circulating Supply</h3>
              <span>${store.data.market_data.circulating_supply}</span>
            </div>


            <div className='showdetailsrow'>
              <h3>Current Price</h3>
              <span>${store.data.market_data.current_price.usd}</span>
            </div>


            <div className='showdetailsrow'>
              <h3>1y Change</h3>
              <span>${store.data.market_data.price_change_percentage_1y.toFixed(2)}%</span>
            </div>

          </div>

        </div>

      </>}

    </>
  )
}
