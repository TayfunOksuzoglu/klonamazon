import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ProductDetails } from '../components/index';
import { GB_CURRENCY } from '../utils/constants';
import { removeFromCart, incrementInCart, decrementInCart } from '../redux/cartSlice';

function CheckoutPage() {
    const products = useSelector((state) => state.cart.products);
    const itemsNumber = useSelector((state) => state.cart.productsNumber);
    const subtotal = useSelector((state) =>
        state.cart.products.reduce((subtotal, product) => product.price * product.quantity + subtotal, 0)
    );
    const dispatch = useDispatch();

    return (
        <div className="h-screen bg-amazonClone-background">
            <div className="min-w-[1000px] max-w-[1500px] m-auto pt-8">
                <div className="grid grid-cols-8 gap-10 ">
                    {/* Products */}
                    <div className="col-span-6 bg-white">
                        <div className="text-2xl xl:text-3xl m-4">Shopping Cart</div>
                        {products.map((product) => (
                            <div key={product.id}>
                                <div className="grid grid-cols-12 divide-y divide-gray-400 mr-4">
                                    <div className="col-span-10 grid grid-cols-8 divide-y divide-gray-400">
                                        <div className="col-span-2">
                                            <Link to={`/product/${product.id}`}>
                                                <img
                                                    className="p-4 m-auto"
                                                    src={product.image_small}
                                                    alt={`Poster of the ${product.title}`}
                                                />
                                            </Link>
                                        </div>
                                        <div className="col-span-6">
                                            <div className="font-medium text-black mt-2">
                                                <Link to={`/product/${product.id}`}>
                                                    <ProductDetails product={product} ratings={false} />
                                                </Link>
                                            </div>
                                            <div>
                                                <button
                                                    className="text-sm xl:text-base font-semibold rounded text-red-500 mt-2 mb-1"
                                                    onClick={() => dispatch(removeFromCart(product.id))}
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                            <div className="grid grid-cols-3 w-20 text-center ">
                                                <div
                                                    onClick={() => dispatch(decrementInCart(product.id))}
                                                    className="text-xl xl:text-2xl bg-gray-400 rounded cursor-pointer"
                                                >
                                                    -
                                                </div>
                                                <div className="text-l xl:text-xl bg-gray-200">{product.quantity}</div>
                                                <div
                                                    onClick={() => dispatch(incrementInCart(product.id))}
                                                    className="text-xl xl:text-2xl bg-gray-400 rounded cursor-pointer"
                                                >
                                                    +
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-2">
                                        <div className="text-lg xl:text-xl mt-2 mr-4 font-semibold">
                                            {GB_CURRENCY.format(product.price)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="text-lg 2xl:text-xl text-right mb-4 mr-4">
                            Subtotal ({itemsNumber} items):{' '}
                            <span className="font-semibold">{GB_CURRENCY.format(subtotal)}</span>
                        </div>
                    </div>
                    {/* Checkout */}
                    <div className="col-span-2 bg-white rounded h-[250px] p-7">
                        <div className="text-xs xl:text-sm text-green-600 mb-2">
                            Your order qualifies for <span className="font-bold">FREE DELIVERY</span>. Delivery details
                            <div className="text-base 2xl:text-lg  mb-4 text-black ">
                                Subtotal ({itemsNumber} items):{' '}
                                <span className="font-semibold">{GB_CURRENCY.format(subtotal)}</span>
                            </div>
                            <button className="bg-yellow-400 text-black w-full p-3 text-xs xl:text-sm rounded hover:bg-yellow-500 mt-3">
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CheckoutPage;
