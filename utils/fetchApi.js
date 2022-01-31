import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

  export const fetchApi = async (url) => {
      const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '6ee398b396mshf5d58d4fb21651fp12014ejsn050756e1ccb6'
          }  
      })

      return data;
  }