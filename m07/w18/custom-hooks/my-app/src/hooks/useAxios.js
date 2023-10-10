import { useState, useEffect } from 'react';
import axios from 'axios';

function useAxios(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(url)
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, [url]);

  return [data];
}

export default useAxios;
