import React from 'react';
import Navbar from './internalComponents/Navbar';
import Separator from './assets/separator.svg'
import Footer from '../components/Footer';

const Chefscorner:React.FC = () => {
    return (
<div className='background text-white font6'>
            <Navbar />
            <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl">
            <div className='flex justify-center w-full h-4 mb-5'><img src={Separator} className='flex justify-center' /></div>
      <h3 className="font6 mb-6 text-5xl">Meet Our Team</h3>

      <p className="mb-6 pb-2  md:mb-12 md:pb-0">
        At Our Restaurant, we have a talented team dedicated to delivering
        delicious meals and excellent service.
      </p>

      <div className="grid gap-6 text-center md:grid-cols-3 lg:gap-12">
        <div className="mb-12 md:mb-0">
          <div className="mb-6 flex justify-center">
            <img
              src="https://imgs.search.brave.com/6BOMWTYNnlNriMo807WzvgsTTftQPYf1IBTTkY3hP2o/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9w/b3J0cmFpdC1zbWls/aW5nLWNoZWYtdW5p/Zm9ybV8zMjkxODEt/Njc1LmpwZz9zaXpl/PTYyNiZleHQ9anBn"
              className="w-32 rounded-full shadow-lg dark:shadow-black/30"
              alt="Maria Smantha"
            />
          </div>
          <h5 className="mb-4 text-xl font-semibold">Nischal Acharya</h5>
          <h6 className="mb-4 font-semibold text-primary dark:text-primary-400">
            Head Chef
          </h6>
          <p className="mb-4  ">
          With over a decade of culinary expertise, Chef Nischal brings a passion for creativity and precision to every dish he creates.
          </p>
          <ul className="mb-0 flex items-center justify-center">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5 text-yellow-500"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
            </li>
          </ul>
        </div>

        {/* Sous Chef 1 */}
        <div className="mb-12 md:mb-5">
          <div className="mb-6 flex justify-center">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg"
              className="w-32 rounded-full shadow-lg dark:shadow-black/30"
              alt="Lisa Cudrow"
            />
          </div>
          <h5 className="mb-4 text-xl font-semibold">Lisa Cudrow</h5>
          <h6 className="mb-4 font-semibold text-primary dark:text-primary-400">
            Sous Chef
          </h6>
          <p className="mb-4 ">
          Our talented Sous Chef, brings a fresh perspective to our kitchen with her imaginative approach to traditional recipes.
          </p>
          <ul className="mb-0 flex items-center justify-center">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5 text-yellow-500"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
            </li>
          </ul>
        </div>

        {/* Sous Chef 2 */}
        <div className="mb-5">
          <div className="mb-6 flex justify-center">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).jpg"
              className="w-32 rounded-full shadow-lg dark:shadow-black/30"
              alt="John Smith"
            />
          </div>
          <h5 className="mb-4 text-xl font-semibold">Andriew Alex</h5>
          <h6 className="mb-4 font-semibold text-primary dark:text-primary-400">
            Sous Chef
          </h6>
          <p className="mb-4  ">
          Our Sous Chef, infuses his passion for farm-to-table ingredients into every recipe, creating dishes that celebrate the essence of each season.
          </p>
          <ul className="mb-0 flex items-center justify-center">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5 text-yellow-500"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
            </li>
          </ul>
        </div>

      </div>
    </div>
    <Footer/>
        </div>
    );
}

export default Chefscorner;
