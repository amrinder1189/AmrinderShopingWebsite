import './cat.scss'
import {useContext , useState , useEffect} from 'react'
import {useParams} from 'react-router-dom';
import {CategoriesContext} from '../../context/categories.context'
import ProductCard from '../../components/ProductCard/ProductCard.component'


const Category = () => {

    const {category} = useParams()
    const {categoriesMap} = useContext(CategoriesContext)

    const[products,setProducts] = useState(categoriesMap[category])

    useEffect(() =>{
        setProducts(categoriesMap[category]);
    },[category,categoriesMap])

    return(
        <>
        <h2 className="title">{category.toUpperCase()}</h2>
        <div className="category-containers">
            {
                products && products.map((product)=> <ProductCard key={product.id}  product={product} />  )
            }
        </div>
        </>
    )





}


export default Category;