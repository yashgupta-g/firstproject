
import axios from 'axios';
import create from 'zustand';




const ShowStore = create((set) => ({
  graphdata: [],
  data: null,

  reset: () => {
    set({ graphdata: [], data: null });
  },

  fetchdata: async (id) => {
    const [graphres, datares] = await Promise.all([
      axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=180 `),
      axios.get(`https://api.coingecko.com/api/v3/coins/${id}?localization=false&market_data=true`),
    ]);


    const graphdata = graphres.data.prices.map((price) => {

      const [timestamp, p] = price;
      const date = new Date(timestamp).toLocaleDateString("en-us");
      return {
        Date: date,
        price: p,
      };


    });
    console.log(datares);
    set({ graphdata });
    set({ data: datares.data });
  }

}));
export default ShowStore;

