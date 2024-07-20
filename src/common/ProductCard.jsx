import React from 'react'
import Link from 'next/link';

function ProductCard({image,title,dis,price,id}) {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    
    <img
      src={image}
      alt="Shoes"
      className="rounded-xl max-h-52  w-full" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
    <p></p>
    <p>  ₹{price} </p>
    <div className="card-actions">
      <Link href={`productDetails/${id}`} className="btn btn-neutral rounded-none w-96">Buy Now</Link>
    </div>
  </div>
</div>

  )
}

export default ProductCard