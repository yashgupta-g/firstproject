import axios from 'axios'
import create from 'zustand'
import debounce from '../helpers/debounce'

const HomeStore = create((set) => ({
    coins: [],
    trending: [],
    query: '',
    searched: false,


    setQuery: (e) => {
        set({ query: e.target.value })
        HomeStore.getState().searchcoins()
    },

    searchcoins: debounce(async () => {
        const { query, trending } = HomeStore.getState()

        if (query.length > 2) {


            const res = await axios.get(`https://api.coingecko.com/api/v3/search?query=${query}`)
            const coins = res.data.coins.map(coin => {

                return {
                    name: coin.name,
                    image: coin.large,
                    id: coin.id

                }
            })

            set({ coins, searched: true })
        } else {
            set({ coins: trending, searched: false })
        }
    }, 500),

    fetchcoins: async () => {

        const res = await axios.get(`https://api.coingecko.com/api/v3/search/trending`);

        const coins = res.data.coins.map(coin => {
            return {
                name: coin.item.name,
                image: coin.item.large,
                id: coin.item.id,
                priceBtc: coin.item.price_btc

            }
        })
        set({ coins, trending: coins })
    }
}))

export default HomeStore