import './directory.scss'
import CategoryItem from './category.component'


const categories = [
    
  {
    "id": 1,
    "title": "hats",
    "imageUrl": "https://i.ibb.co/cvpntL1/hats.png",
    route : 'shop/hats'
  },
  {
    "id": 2,
    "title": "jackets",
    "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png",
    route : 'shop/jackets'
  },
  {
    "id": 3,
    "title": "sneakers",
    "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png",
    route : 'shop/sneakers'
  },
  {
    "id": 4,
    "title": "womens",
    "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png",
    route : 'shop/womens'
  },
  {
    "id": 5,
    "title": "mens",
    "imageUrl": "https://i.ibb.co/R70vBrQ/men.png",
    route : 'shop/mens'
    //  "imageUrl":"https://st2.depositphotos.com/16781356/47810/v/380/depositphotos_478104592-stock-illustration-online-store-icon-vector-design.jpg?forcejpeg=true"
  }


];


const Directory = () => {

    return(

         <div className='directory-container'>
            {categories.map((category) => (
              <CategoryItem key={category.id} category={category} />
            ))}
          </div>

    );}

export default Directory;