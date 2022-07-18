import {Routes,Route} from 'react-router-dom';

import Categoriespreview from '../../routes/category-preview/categoryPreview'
import Category from '../category/category'
import './shop.scss'



const Shop = () => {

    

    return(
      <Routes>
        <Route index element={<Categoriespreview />}  />
        <Route path=":category" element={<Category />}  />
      </Routes>
      
    );

}

export default Shop;