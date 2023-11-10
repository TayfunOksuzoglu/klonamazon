import { HiOutlineShoppingCart } from 'react-icons/hi2';
import { Search } from './index';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function NavBar() {
    const cart = useSelector((state) => state.cart.productsNumber);
    return (
        <header className="min-w-[1000px]">
            <nav className="bg-amazonClone text-white h-[60px] flex">
                {/* Left */}
                <div className="flex items-center m-4">
                    <Link to="/">
                        <img className="h-[35px] w-[100px] m-2" src="/images/amazon.png" alt="main logo" />
                    </Link>
                    <div className="pr-4 pl-4">
                        <div className="text-xs xl:text-sm">Deliver to</div>
                        <div className="text-sm xl:text-base font-bold">United Kingdom</div>
                    </div>
                </div>
                {/* Middle */}
                <div className="flex grow relative items-center">
                    <Search />
                </div>
                {/* Right */}
                <div className="flex items-center m-4">
                    <div className="pr-4 pl-4">
                        <div className="text-xs xl:text-sm">Hello, sign in</div>
                        <div className="text-sm xl:text-base font-bold">Accounts & Lists</div>
                    </div>
                    <div className="pr-4 pl-4">
                        <div className="text-xs xl:text-sm">Returns</div>
                        <div className="text-sm xl:text-base font-bold">& Orders</div>
                    </div>
                    <Link to="/checkout">
                        <div className="flex px-3 ">
                            <HiOutlineShoppingCart size={'48px'} />
                            <div className="relative">
                                <div className="absolute right-[9px] font-bold m-2 text-orange-400">{cart}</div>
                            </div>
                            <div className="mt-7 text-xs xl:text-sm font-bold ">Cart</div>
                        </div>
                    </Link>
                </div>
            </nav>
            <div className="flex bg-amazonClone-light_blue text-white gap-3 text-xs xl:text-sm p-2 pl-6">
                <div>Today's Deals</div>
                <div>Customer Service</div>
                <div>Registry</div>
                <div>Gift Card</div>
                <div>Sell</div>
            </div>
        </header>
    );
}

export default NavBar;
