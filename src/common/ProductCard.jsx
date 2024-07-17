import React from 'react'

function ProductCard({image,title,dis,price}) {
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
    <p>{dis}</p>
    <p>  ₹{price} </p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

  )
}

export default ProductCard