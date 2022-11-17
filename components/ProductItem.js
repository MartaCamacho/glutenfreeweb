import Link from 'next/link';

const ProductItem = ({product}) => {
  return (<>
            <div className='card'>
                <span className='mx-auto my-auto w-100 flex justify-center image-container rounded shadow'>
                    <Link href={`/product/${product.slug}`} className="flex justify-center h-100" >
                        <img src={product.image} alt={product.name} className='w-auto h-auto'/>
                    </Link>
                </span>
                <div className='flex flex-col items-center justify-center p-5'>
                    <Link href={`/product/${product.slug}`}>
                        <h2 className='text-lg'>{product.name}</h2>
                    </Link>
                    <p className='mb-2'>{product.brand}</p>
                    <p>€{product.price}</p>
                    <button className='primary-button' type='button'>
                        Add to cart
                    </button>
                </div>
            </div>
            <style jsx>{`
            .image-container {
                height: auto;
                width: 344px;
                max-width: 100%;
                height: 344px;
                max-height: 100%;
                overflow: hidden;
            }
            `}</style>
        </>
        )
}

export default ProductItem