import React from "react";
import hero from "../../assets/images/hero.png";
import heroRight from "../../assets/images/heroRight.png";
import heroRightBg from "../../assets/images/heroRightBg.png";
import logo1 from "../../assets/logos/LOGO 1.png";
import notification1 from "../../assets/images/notification1.png";
import notification2 from "../../assets/images/notification2.png";
import arrow from "../../assets/icons/arrow.png";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto mt-8 px-4">
      <div className="relative overflow-hidden rounded-3xl border border-gray-400 bg-white h-[320px] md:h-[380px] lg:h-[400px] xl:h-[450px]">
        {/* LEFT CONTENT */}
        <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[420px] text-center lg:left-12 lg:-translate-x-0 lg:text-left z-20 md:left-65">
          <p className="text-gray-600 mb-3">
            Order Restaurant food, takeaway and groceries.
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Feast Your Senses,
            <br />
            <span className="text-orange-500">Fast and Fresh</span>
          </h1>
          <p className="text-gray-500 mt-2 mb-3">
            Enter a postcode to see what we deliver
          </p>
          <div className="flex w-full border border-gray-400 rounded-full overflow-hidden h-11 md:h-12 md:w-90 xl:h-14 xl:w-full lg:h-10 lg:w-80">
            <input
              type="text"
              placeholder="e.g. EC4R 3TE"
              className="flex-1 px-3 md:px-4 lg:px-5 text-sm lg:text-base outline-none"
            />

            <button className="bg-orange-500 rounded-full flex items-center justify-center w-12 md:w-14 lg:w-0 lg:px-10 xl:w-auto xl:px-10">
              {/* Mobile & Tablet */}
              <img src={arrow} alt="Search" className="w-8 h-8 lg:hidden" />

              {/* Desktop */}
              <span className="hidden lg:block font-semibold text-white">Search</span>
            </button>
          </div>
        </div>

        {/* ORANGE BACKGROUND */}
        <div className="hidden lg:block xl:absolute xl:right-0 xl:top-0 xl:h-full xl:w-[37%]  lg:absolute lg:right-0 lg:top-0 lg:h-auto lg:w-[37%] lg:h-full">
          <img
            src={heroRightBg}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* FOOD IMAGE */}
        <img
          src={heroRight}
          alt=""
          className="hidden lg:block absolute xl:right-[250px] xl:bottom-0 xl:w-[250px] lg:right-[160px] lg:bottom-0 lg:w-[255px] z-20"
        />

        {/* GIRL IMAGE */}
        <img
          src={hero}
          alt=""
          className="hidden md:block absolute bottom-0 md:-right-25 md:left-auto md:translate-x-0 md:h-[350px] lg:left-130 lg:right-auto lg:-translate-x-1/2 lg:h-[380px] lg:bottom-0 xl:left-1/2 xl:right-auto xl:-translate-x-1/2 xl:h-[400px] xl:bottom-0 z-30
  "
        />

        {/* Notification 1 */}
        <div className="hidden lg:block absolute lg:top-8 lg:right-15 xl:top-12 xl:right-16 bg-white rounded-2xl shadow-lg lg:p-3 xl:p-4 lg:w-60 xl:w-72 z-40">
          <div className="absolute lg:-top-9 xl:-top-11 right-4">
            <h1
              className="text-transparent lg:text-4xl xl:text-5xl font-bold"
              style={{ WebkitTextStroke: "1px rgba(255, 255, 255, 0.8)" }}
            >
              1
            </h1>
          </div>

          <div className="relative">
            <img src={logo1} alt="" className="lg:w-12 xl:w-15" />

            <div className="flex gap-2">
              <p className="font-semibold lg:text-xs xl:text-sm pt-2">
                We've Received your order!
              </p>

              <img
                src={notification1}
                alt="notification1"
                className="lg:w-4 xl:w-5 h-auto"
              />
            </div>

            <p className="text-gray-500 lg:text-xs xl:text-sm">
              Awaiting Restaurant acceptance
            </p>

            <small className="absolute top-0 lg:right-0 xl:left-57 text-gray-500">
              now
            </small>
          </div>
        </div>

        {/* Notification 2 */}
        <div className="hidden lg:block absolute lg:top-36 lg:right-2 xl:top-43 xl:right-4 bg-white rounded-2xl shadow-lg lg:p-3 xl:p-4 lg:w-60 xl:w-72 z-40">
          <div className="absolute lg:-top-9 xl:-top-10 right-4">
            <h1
              className="text-transparent lg:text-4xl xl:text-5xl font-bold"
              style={{ WebkitTextStroke: "1px rgba(255, 255, 255, 0.8)" }}
            >
              2
            </h1>
          </div>

          <div className="relative">
            <img src={logo1} alt="" className="lg:w-12 xl:w-15" />

            <div className="flex gap-2">
              <p className="font-semibold lg:text-xs xl:text-sm pt-2">
                Order Accepted!
              </p>

              <img src={notification2} alt="" className="lg:w-4 xl:w-auto" />
            </div>

            <p className="text-gray-500 lg:text-xs xl:text-sm">
              Your order will be delivered shortly
            </p>

            <small className="absolute top-0 lg:right-0 xl:left-57 text-gray-500">
              now
            </small>
          </div>
        </div>
        {/* Notification 3 */}
        <div className="hidden lg:block absolute lg:bottom-15 lg:right-15 xl:bottom-9 xl:right-16 bg-white rounded-2xl shadow-lg lg:p-3 xl:p-4 lg:w-60 xl:w-72 z-40">
          <div className="absolute lg:-top-9 xl:-top-10 right-4">
            <h1
              className="text-transparent lg:text-4xl xl:text-5xl font-bold"
              style={{ WebkitTextStroke: "1px rgba(255, 255, 255, 0.8)" }}
            >
              3
            </h1>
          </div>

          <div className="relative">
            <img src={logo1} alt="" className="lg:w-12 xl:w-15" />

            <p className="font-semibold lg:text-xs xl:text-sm pt-2">
              Your rider's nearby 🎉
            </p>

            <p className="text-gray-500 lg:text-xs xl:text-sm">
              They're almost there — get ready!
            </p>

            <small className="absolute top-0 lg:right-0 xl:left-57 text-gray-500">
              now
            </small>
          </div>
        </div>
      </div>
    </section>
  );
}
