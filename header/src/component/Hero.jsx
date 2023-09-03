import doctorimg from "../images/doctor-img.png";
import docimg1 from "../images/doc-imgcp1.png";
import docimg2 from "../images/doc-imgcp2.png";
import dullplus from "../images/dull-plus.png";
import dullplus1 from "../images/dull-plus1.png";


export default function Hero() {
  return (
    <>
      <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div class="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
          <div>
            <h1 class="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-5xl lg:leading-tight   ">
              Book Consultation & Lab Tests
              <span class="text-green-600"> anytime & anywhere</span>
            </h1>
            <p class="mt-3 text-lg text-gray-800">
              Taking care of your well-being has never been easier. Book lab
              tests with utmost convenience through easyheals.
            </p>

            <div>
              <form
                action=""
                method="post"
                id="revue-form"
                name="revue-form"
                target="_blank"
                class="p-2 mt-8 transition duration-500 ease-in-out transform border2 bg-gray-50 md:mx-auto rounded-xl sm:max-w-3xl flex items-center drop-shadow-lg"
              >
                <div class="divide-y lg:divide-x lg:divide-y-0 lg:flex space-y 4  items-center lg:flex-row">
                  <div className="flex-1 min-w-0 revue-form-group flex flex-row flex-wrap justify-start">
                    <label for="name" class="text-sm text-green-500 ms-5">
                      Location
                    </label>
                    <input
                      id="name"
                      type="text"
                      class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-black-300 transition duration-500 ease-in-out transform bg-transparent border border-transparent rounded-md focus:outline-none focus:border-transparent "
                      placeholder="Enter your name "
                    />
                  </div>
                  <div class="flex-1 min-w-0 revue-form-group flex flex-row flex-wrap justify-start">
                    <label for="member_email" className="text-sm text-green-500 ms-5">
                      Doctor/Speciality
                    </label>
                    <input
                      id="cta-email"
                      type="email"
                      class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-black-300 transition duration-500 ease-in-out transform bg-transparent border border-transparent rounded-md focus:outline-none focus:border-transparent "
                      placeholder="Enter your email  "
                    />
                  </div>
                </div>
                <div class="mt-4 sm:mt-0 lg:ml-3 revue-form-actions">
                  <button
                    type="submit"
                    value="Subscribe"
                    name="member[subscribe]"
                    id="member_submit"
                    class="block w-full px-5 py-3 text-base font-medium text-white bg-gradient-to-r from-orange-600 to-orange-700 border border-transparent rounded-lg shadow hover:bg-orange-800 focus:outline-none sm:px-10"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div class="relative ml-4">
            <img
              class="w-85 h-85 object-scale-down rounded-md"
              src={doctorimg}
              alt="doctotr feature Description"
            />
            <div class="absolute bottom- left-15 top-20 right- transform translate-y-1/2">
              <img
                className="w-48 h-48 object-scale-down"
                src={docimg1}
                alt="plus"
                // absolute top-0 right-0 transform translate-x-1/2 translate-y-1/2 w-20 h-20
              />
            </div>
            <div class="absolute left-0 top-20 right-23 transform translate-x-1/2">
              <img
                className="w-48 h-48 object-scale-down"
                src={docimg2}
                alt="plus"
                // absolute top-0 right-0 transform translate-x-1/2 translate-y-1/2 w-20 h-20
              />
            </div>
            <div class="">
              <div class="absolute bottom-80 transform translate-x-1/2 ">
                <img
                  class="w-48 h-48 object-scale-down rounded-md"
                  src={dullplus}
                  alt="Doc feature Description"
                />
              </div>
            </div>

            <div class="absolute bottom-40 right-0 transform translate-y-1/2 translate-x-1/2">
              <img
                className="w-52 h-52 object-scale-down "
                src={dullplus1}
                alt="doc"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
