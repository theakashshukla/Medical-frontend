import image1 from "../images/imgs-1.png";
import image2 from "../images/imgs-2.png";
import image3 from "../images/imgs-3.png";
import image4 from "../images/imgs-4.png";
import image5 from "../images/imgs-5.png";
import image6 from "../images/imgs-6.png";
import image7 from "../images/imgs-7.png";
import image8 from "../images/imgs-8.png";

export default function Services() {
  return (
    <>
      <div class="py-6 p-12 sm:py-8 lg:py-12">
        <div className="bg-white h-100 flex items-center justify-between p-4 rounded-lg shadow-md">
          <div className=" h-100 w-80 flex flex-col items-center">
            <img
              src={image2}
              alt="service 1"
              className="w-10 h-10 rounded-full"
            />
            <span className="whitespace-normal">Top Rated Doctors</span>
          </div>

          <div className="w-1/2 flex flex-col items-center">
            <img
              src={image1}
              alt="service 2"
              className="w-10 h-10 rounded-full mr-2"
            />
            <span className="whitespace-normal">Find Best Hospitals</span>
          </div>
          <div className="w-1/2 flex flex-col items-center">
            <img
              src={image4}
              alt="service 3"
              className="w-10 h-10 rounded-full mr-2"
            />
            <span>Book Lab Tests</span>
          </div>
          <div className="w-1/2 flex flex-col items-center">
            <img
              src={image3}
              alt="service 4"
              className="w-10 h-10 rounded-full mr-2"
            />
            <span>Compare & Book Surgeries</span>
          </div>
          <div className="w-1/2 flex flex-col items-center">
            <img
              src={image8}
              alt="service 5"
              className="w-10 h-10 rounded-full mr-2"
            />
            <span>Treatment by Symptoms</span>
          </div>
          <div className="w-1/2 flex flex-col items-center">
            <img
              src={image6}
              alt="service 6"
              className="w-10 h-10 rounded-full mr-2"
            />
            <span>Search by Specialities</span>
          </div>
          <div className="w-1/2 flex flex-col items-center">
            <img
              src={image5}
              alt="service 7"
              className="w-10 h-10 rounded-full mr-2"
            />
            <span>Treatment by Diseases</span>
          </div>
          <div className="w-1/2 flex flex-col items-center">
            <img
              src={image7}
              alt="service 8"
              className="w-10 h-10 rounded-full mr-2"
            />
            <span>Compare price & services</span>
          </div>
        </div>
      </div>
    </>
  );
}
