import useAxios from './useAxios';
const DOG_API = 'https://random.dog/woof.json';

function usePet() {
  const [data] = useAxios(DOG_API);


  return [data];
}

export default usePet;
