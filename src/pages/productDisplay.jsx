import { MdStar } from 'react-icons/md';
import product_rt_1 from '../assets/product_rt_1.png';
import product_rt_2 from '../assets/product_rt_2.png';
import product_rt_3 from '../assets/product_rt_3.png';
import product_rt_4 from '../assets/product_rt_4.png';
import { useContext } from 'react';
import { ShopContext } from '../Context/shopContext';


const productDisplay = (props) => {
    const { product } = props;
    const {addToCart} = useContext(ShopContext);

    return (
        <section>
            <div className='flex flex-col gap-14 xl:flex-row'>
                <div className='flex gap-x-2'>
                    <div className='flex flex-col gap-[12px] flex-wrap w-20'>

                        <img src={product_rt_1} alt="not found" classname='max-h-[99px]' />
                        <img src={product_rt_2} alt="not found" classname='max-h-[99px]' />
                        <img src={product_rt_3} alt="not found" classname='max-h-[99px]' />
                        <img src={product_rt_4} alt="not found" classname='max-h-[99px]' />
                    </div>
                    <div>
                        <img src={product.image} alt="" />
                    </div>
                </div>
                <div className='flex-col flex xl:flex-[1.7]'>
                    <h3 className='h3'>{product.name}</h3>
                    <div className='flex gap-x-2 text-secondary medium-22'>
                        <MdStar />
                        <MdStar />
                        <MdStar />
                        <MdStar />
                        <p>(111)</p>
                    </div>
                    <div className='flex gap-x-6 medium-20 my-4'>
                        <div className='line-through'>₹{product.old_price*70}</div>
                        <div className='text-secondary'>₹{product.new_price*70}</div>
                    </div>
                    <div className='mb-4'>
                        <h4 className='bold-16'>Select Size: </h4>
                        <div className='flex gap-3 my-3'>
                            <div className='ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer'>S</div>
                            <div className='ring-2 ring-slate-900/10 h-10 w-10 flexCenter cursor-pointer'>M</div>
                            <div className='ring-2 ring-slate-900/10 h-10 w-10 flexCenter cursor-pointer'>L</div>
                            <div className='ring-2 ring-slate-900/10 h-10 w-10 flexCenter cursor-pointer'>XL</div>
                            <div className='ring-2 ring-slate-900/10 h-10 w-10 flexCenter cursor-pointer'>XXL</div>
                        </div>
                        <div className='flex flex-col gap-y-3 mb-4 max-w-[555px]'>
                            <button onClick={()=>{addToCart(product.id)}} className='btn_dark_outline !rounded-none uppercase regular-14 tracking-widest'>Add to Cart</button>
                            <button className='btn_dark_rounded !rounded-none uppercase regular-14 tracking-widest'>Buy Now</button>
                        </div>
                        <p><span className='medium-16 text-tertiary'>Category: </span>Women | Jacket | Winter</p>
                        <p><span className='medium-16 text-tertiary'>Tags: </span>Modern | Latest</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default productDisplay