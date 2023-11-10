import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { callAPI } from '../utils/CallApi';
import { ProductDetails } from '../components/index';
import { GB_CURRENCY } from '../utils/constants';
import { addToCart } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';

function ProductPage() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState('1');
    const dispatch = useDispatch();

    const getProduct = () => {
        callAPI(`data/products.json`).then((productResults) => {
            setProduct(productResults[id]);
        });
    };

    const addQuantityToProduct = () => {
        setProduct((product.quantity = quantity));
        return product;
    };

    useEffect(() => {
        getProduct();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!product?.title) return <h1>Loading Product...</h1>;

    if (product)
        return (
            <div className="h-screen bg-amazonClone-background">
                <div className="min-w-[1000px] max-w-[1500px] m-auto p-4">
                    <div className="grid grid-cols-10 gap-2">
                        {/* Left */}
                        <div className="col-span-3 p-8 rounded bg-white m-auto">
                            <img src={`${product.image}`} alt={`Poster of the ${product.title} product`} />
                        </div>
                        {/* Middle */}
                        <div className="col-span-5 p-4 rounded bg-white divide-y divide-gray-400">
                            <div className="mb-3">
                                <ProductDetails product={product} ratings={true} />
                            </div>
                            <div className="text-base xl:text-lg mt-3">{product.description}</div>
                        </div>
                        {/* Right */}
                        <div className="col-span-2 p-4 rounded bg-white">
                            <div className="text-xl xl:text-2xl font-semibold text-red-700 text-right">
                                {GB_CURRENCY.format(product.price)}
                            </div>
                            <div className="text-base xl:text-lg font-semibold text-gray-500 text-right">
                                RRP: <span className="line-through">{GB_CURRENCY.format(product.oldPrice)}</span>
                            </div>
                            <div className="text-sm xl:text-base font-semibold text-blue-500 mt-3">FREE Returns</div>
                            <div className="text-sm xl:text-base font-semibold text-blue-500 mt-1">FREE Delivery</div>
                            <div className="text-base xl:text-lg font-semibold text-green-700 mt-1">In Stock</div>
                            <div className="text-base xl:text-lg mt-1">
                                <label htmlFor="quantity" className="mr-2">
                                    Quantity:
                                </label>
                                <select
                                    onChange={(e) => setQuantity(e.target.value)}
                                    name="Quantity"
                                    id="quantity"
                                    className="px-2 bg-white border rounded-md focus:outline-none focus:ring focus:ring-indigo-600"
                                >
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>
                            <Link to={'/checkout'}>
                                <button
                                    onClick={() => dispatch(addToCart(addQuantityToProduct()))}
                                    className="bg-yellow-400 w-full p-3 text-xs xl:text-sm rounded hover:bg-yellow-500 mt-3"
                                >
                                    Add to Cart
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default ProductPage;
