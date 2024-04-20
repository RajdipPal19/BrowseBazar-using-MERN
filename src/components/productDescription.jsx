import React from 'react'

const productDescription = () => {
    return (
        <div className='mt-20'>
            <div className='flex gap-3 mb-4'>
                <button className='btn_dark_rounded !rounded-none !text-xs !py-[6px] w-36'>Description</button>
                <button className='btn_dark_outline !rounded-none !text-xs !py-[6px] w-36'>Care Guide</button>
                <button className='btn_dark_outline !rounded-none !text-xs !py-[6px] w-36'>Size Guide</button>
            </div>
            <div className='flex flex-col pb-16'>
                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis vitae ut quasi, consectetur vero quisquam illo assumenda voluptatum laborum, tempora, officiis et? At, praesentium pariatur natus numquam sapiente facilis temporibus.</p>
                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, fugiat! Expedita delectus odio blanditiis sint error, excepturi animi vero iure fugit cupiditate labore in, deleniti tempora laudantium, voluptate incidunt hic.</p>
            </div>
        </div>
    )
}

export default productDescription