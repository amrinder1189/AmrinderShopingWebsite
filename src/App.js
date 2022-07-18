import Home from '../src/routes/home/home.compoenent'
import {Routes, Route} from 'react-router-dom';
import Navigation from '../src/routes/navigation/navigation.component'
import SignIn from './routes/signIn/signin'
import Shop from '../src/routes/shop/shop.component'
import Checkout from '../src/routes/chekout/chekout'



const App = () => {
  return(
  <Routes>
    <Route path='/' element={<Navigation />} >
      <Route index element={<Home />} />
      <Route path='shop/*' element={<Shop />} />
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/chechkout' element={<Checkout />} />
    </Route>
  </Routes>


  )

};


export default App;