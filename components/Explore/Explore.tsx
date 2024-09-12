import Image from "next/image";
import ExploreItem from "./ExploreItem";

const Explore = () => {
  return (
    <section className="py-12 xl:py-0 xl:h-[90vh] xl:w-screen">
      <div className="container mx-auto xl:w-full xl:h-full flex xl:justify-center xl:items-center">
        <div className="w-full flex flex-col lg:flex-row gap-12 xl:gap-20">
          <div className="flex-1 flex flex-col justify-around items-end text-center xl:text-left gap-12 xl:gap-0 max-w-[400px] mx-auto xl:max-w-none xl:mx-0">
            {/* item 1 */}
            <ExploreItem
              itemCSS="xl:text-right xl:items-end"
              icon="coffee-1.svg"
              text={{
                title: "Rich Espresso Blends",
                description:
                  "Indulge in the deep, robust flavors of our expertly crafted espresso blends. Perfect for a quick pick-me-up or a leisurely afternoon treat.",
              }}
            />
            {/* item 2 */}
            <ExploreItem
              itemCSS="xl:text-right xl:items-end"
              icon="coffee-2.svg"
              text={{
                title: "Classic Drip Coffee",
                description:
                  "Enjoy the comforting taste of our classic drip coffee, brewed to perfection. A timeless choice for coffee enthusiasts who appreciate simplicity.",
              }}
            />
          </div>
          <div className="hidden xl:flex justify-center">
            <div className="relative w-[322px] h-[580px]">
              <Image
                src="/assets/explore/cup.png"
                fill
                alt=""
                className="object-cover"
                quality={100}
                priority
                data-scroll
                data-scroll-speed="0.1"
              />
            </div>
          </div>
          <div className="flex-1  flex flex-col justify-around text-center xl:text-left gap-12 xl:gap-0 max-w-[400px] mx-auto xl:max-w-none xl:mx-0">
            {/* item 3 */}
            <ExploreItem
              itemCSS="xl:text-left items-start"
              icon="coffee-3.svg"
              text={{
                title: "Smooth Cold Brews",
                description:
                  "Refresh yourself with our smooth and invigorating cold brew options. Ideal for those warm days when you need a cool, caffeinated boost.",
              }}
            />
            {/* item 4 */}
            <ExploreItem
              itemCSS="xl:text-left items-start"
              icon="coffee-4.svg"
              text={{
                title: "Flavorful Latte Varieties",
                description:
                  "Experience the rich and creamy flavors of our diverse latte selections. From vanilla to caramel, we have a latte to suit every taste.",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
