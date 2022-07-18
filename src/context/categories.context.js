import { createContext, useState ,useEffect} from 'react';

import {addCollectionAndDocuments,getCategoriesAndDocuments} from '../utility/firebase';

// import SHOP_DATA from '../shop-data.js';

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setcategoriesMap] = useState({});

    useEffect(()=>{

      const getcategoriesmap = async ()=>{
          const categorymap = await getCategoriesAndDocuments()
          console.log(categorymap);
          setcategoriesMap(categorymap)
      }

      getcategoriesmap();

    },[])

   



    const value = { categoriesMap };
      return (
      <CategoriesContext.Provider value={value}>
        {children}
      </CategoriesContext.Provider>
    );
  };
