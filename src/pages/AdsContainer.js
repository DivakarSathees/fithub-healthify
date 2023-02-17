import {useQuery} from "react-query";

const AdsContainer = ({children}) => {
  const query = useQuery('todos', () => {
    return fetch("http://localhost:5000/userdetails/6377c3342958c22e9cca814e").then(response => {
      return response.json()
    })
  })

  
  /* logics that depends on your data
   * userEffect(() => {}, [data.length])
   */

  return (
    <div data={query.data}>
      {children}
    </div>
  )
}
export default AdsContainer