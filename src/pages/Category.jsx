import React from 'react'
import { MdOutlineKeyboardArrowDown,MdOutlineKeyboardArrowLeft} from 'react-icons/md'
import all_products from '../assets/all_products'
import Item from '../pages/Item'

const Category = ({ Category, banner }) => {
  return (
    <section className='max_padd_container py-12 xl:py-28'>
      <div>
        <div>
          <img src={banner} alt="not found" className='block my-7 mx-auto' />
        </div>
        <div className='flexBetween my-8 mx-2'>
          <h5><span className='font-bold'>Showing 1-12</span>out of 36 results</h5>
          <div>Sort by <MdOutlineKeyboardArrowDown /></div>
        </div>
        <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6'>
          {all_products.map((item) => {
            if (Category === item.category) {
              return <Item key={item.id} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} />
            }
          })}
        </div>
        <div className='mt-16 text-center'>
          <button className='btn_dark_rounded'>Load More </button>
        </div>
      </div>
    </section>
  )
}

export default Category