import './App.css';
import {useState, useEffect} from "react"
import axios from "axios"
import AllProduct from './components/AllProductComponent/AllProduct';
import Lipstick from './components/LipstickComponent/LipstickComponent';
import Pencil from './components/PencilComponent/Pencil';
import Powder from './components/PowderComponent/Powder';
import LipGloss from './components/LipGlossComponent/LipGloss';
import Gel from './components/OthersComponent/Others';
import Cream from './components/CreamComponent/Cream';
import Palette from './components/PaletteComponent/Palette';
import Concealer from './components/ConcealerComponent/Concealer';
import {Route, Routes} from "react-router-dom";
const baseURL = 'http://makeup-api.herokuapp.com/api/v1/products.json';


function App() {

  const [cardList, setCardList] = useState([])

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setCardList(response.data
              .filter((c)=> c.hasOwnProperty('category') && c.category))});
  }, [cardList.length]);



  return (
    <div>

      <Routes>
      <Route path='/*' element={<AllProduct cardList = {cardList}/>} />
      <Route path='/lipstick/*' element={<Lipstick cardList = {cardList}/>} />
      <Route path='/pencil/*' element={<Pencil cardList = {cardList} />} />
      <Route path='/powder/*' element={<Powder cardList = {cardList}/>} />
      <Route path='/lip-gloss/*' element={<LipGloss cardList = {cardList}/>} />
      <Route path='/others/*' element={<Gel cardList = {cardList}/>} />
      <Route path='/cream/*' element={<Cream cardList = {cardList}/>} />
      <Route path='/palette/*' element={<Palette cardList = {cardList}/>} />
      <Route path='/concealer/*' element={<Concealer cardList = {cardList}/>} />
      </Routes>
    </div>
  );
}

export default App;
