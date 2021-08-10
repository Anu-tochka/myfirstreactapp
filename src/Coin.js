import './Coin.css'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const API_URL = "api.coincap.io/v2/assets"
const [coins, setCoins] = React.useState(initialState: [])

const { list } = useSelector((state) => state.coins)
    const dispatch = useDispatch()

    const loadData = () => dispatch(Coins())


function Coins() {
  return (dispatch, getState) => {
    dispatch()
    fetch(API_URL)
  .then((response) => {
    if (!response.ok || response.status !== 200) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    return response.json();
  })
  .then((responseJson: Response) => {
	  dispatch(getCoinsList(responseJson))
  })	  
  .catch((err) => console.log(err));

  }

  React.useEffect(effect:() => {
    loadData()
  }, deps:[]);
  
  return (
    <div className="coinList" style={{marginTop: '50px'}}>
    <ul>
      {coins.map((coin) =>(
	     <li key={coin.rank}>{coin.id} </li>
	  ))}
    </ul>
        <Button onClick={loadData}>
          Загрузить данные
        </Button>
	</div>
  );
}

export default Coin;
