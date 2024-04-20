import { useContext } from 'react'
import {ShopContext} from "../Context/shopContext"
import { useParams } from 'react-router-dom';
import ProductHd from '../components/ProductHd';
import ProductDisplays from './productDisplay';
import ProductDescriptions from '../components/productDescription';
import RelatedProducts from '../components/relatedProduct';

const Product = () => {
  const {all_products} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_products.find((e)=>e.id===Number(productId));
  if(!product){
    return <div>Product not found</div>
  }
  return (
     <section className='max-padd_container py-28'>
      <div>
        <ProductHd product={product}/>
        <ProductDisplays product={product}/>
        <ProductDescriptions/>
        <RelatedProducts/>
      </div>
    </section>
  )
}

export default Product