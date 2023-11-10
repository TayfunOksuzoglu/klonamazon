import { Carousel, CarouselCategory, HomePageCard, CarouselProduct } from '../components/index';

function HomePage() {
    return (
        <div className="bg-amazonClone-background">
            <div className="min-w-[1000px] max-w-[1500px] m-auto ">
                <Carousel />
                <div className="grid grid-cols-3 xl:grid-cols-4 -mt-80 ">
                    <HomePageCard
                        title="We have a surprise for you"
                        img={'/images/home_grid_1.jpg'}
                        link={'See terms and conditions'}
                    />
                    <HomePageCard
                        title="Watch The Rings of Power"
                        img={'/images/home_grid_2.jpg'}
                        link={'Start streaming now'}
                    />
                    <HomePageCard title="Unlimited Streaming" img={'/images/home_grid_3.jpg'} link={'Find out more'} />
                    <HomePageCard
                        title="More titles to explore"
                        img={'/images/home_grid_4.jpg'}
                        link={'Browse Kindle Unlimited'}
                    />
                    <HomePageCard title="Shop Pet Supplies" img={'/images/home_grid_5.jpg'} link={'See more'} />
                    <HomePageCard title="Spring Sale" img={'/images/home_grid_6.jpg'} link={'See the deals'} />
                    <HomePageCard title="Echo Buds" img={'/images/home_grid_7.jpg'} link={'See More'} />
                    <HomePageCard
                        title="Family Plan: 3 months free"
                        img={'/images/home_grid_8.jpg'}
                        link={'Learn More'}
                    />

                    <div className="m-3 pt-8">
                        <img className="xl:hidden" src="/images/banner_image_2.jpg" alt="banner" />
                    </div>
                </div>
                <CarouselCategory />
                <CarouselProduct />
                <div className="h-[200px] ">
                    <img className="h-full m-auto" alt="/" src="/images/banner_image.jpg" />
                </div>
            </div>
        </div>
    );
}

export default HomePage;
