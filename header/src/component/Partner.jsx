import imgs1 from "../images/image-1.png";
import imgs2 from "../images/image-2.png";
import imgs3 from "../images/image-3.png";
import imgs4 from "../images/image-4.png";
import imgs5 from "../images/image-5.png";

export default function Partner() {
  return (
    <>
      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
          <h2 class="mb-8 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">
            Our Trusted Partners
          </h2>

          <div class="grid grid-cols-4 gap-4 rounded-lg bg-white p-6 sm:h-40 sm:content-evenly md:grid-cols-5">
            <div class="flex justify-center object-scale-down h-16">
              <img src={imgs1} alt="partner img" />
            </div>
            <div class="flex justify-center object-scale-down h-16">
              <img src={imgs5} alt="partner img" />
            </div>
            <div class="flex justify-center object-scale-down h-16">
              <img src={imgs2} alt="partner img" />
            </div>

            <div class="flex justify-center object-scale-down h-16">
              <img src={imgs3} alt="partner img" />
            </div>

            <div class="flex justify-center object-scale-down h-16">
              <img src={imgs4} alt="partner img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
