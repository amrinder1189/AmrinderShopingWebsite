import {useContext,Fragment} from 'react'
// import SHOP_DATA from '../../shop-data.json'
import { CategoriesContext }  from '../../context/categories.context';
// import ProductCard from '../../components/ProductCard/ProductCard.component';
import CategoryPreview from '../../components/category-preview/categoryPreview'
// import './catp.scss' 


const Categoriespreview = () => {

    const {categoriesMap} = useContext(CategoriesContext);

    return(

      <>
      {
        Object.keys(categoriesMap).map((title) => {

          const products = categoriesMap[title];
          return <CategoryPreview key={title}  title={title} products={products} />


         
      })}

    </>
    );

}

export default Categoriespreview ;