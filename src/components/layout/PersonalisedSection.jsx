import Logo from "../../assets/logos/Logo.png";
import AppStore from "../../assets/Images/AppStore.png";
import PlayStore from "../../assets/Images/PlayStore.png";
import Friends from "../../assets/Images/Friends.png";

function PersonalisedSection() {
  return (
    <section className="w-full bg-[#F0F0F0]">
      <div className="max-w-[1528px] mx-auto flex flex-col lg:flex-row items-center gap-6 lg:gap-0">
        {/* Left - Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={Friends}
            alt="Couple ordering food"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right - Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start px-6 sm:px-10 lg:px-12 py-8 lg:py-0 text-center lg:text-left">
          {/* Heading */}
          <h2 className="flex items-center flex-wrap justify-center lg:justify-start text-[28px] sm:text-[36px] lg:text-[42px] font-extrabold text-[#03081F] leading-tight mb-4">
            Order
            <img
              src={Logo}
              alt="Order.uk"
              className="h-[26px] sm:h-[34px] lg:h-[38px] mx-1 object-contain inline-block"
            />
            ing is more
          </h2>

          {/* Badge */}
          <div className="bg-[#03081F] rounded-full px-6 sm:px-8 py-3 sm:py-4 mb-6">
            <p className="text-[20px] sm:text-[26px] lg:text-[30px] font-bold">
              <span className="text-[#FC8A06] underline decoration-2 underline-offset-4">
                Personalised
              </span>
              <span className="text-white"> &amp; Instant</span>
            </p>
          </div>

          {/* Subtext */}
          <p className="text-[14px] sm:text-[15px] text-[#03081F] mb-5">
            Download the Order.uk app for faster ordering
          </p>

          {/* App Store Buttons */}
          <div className="flex items-center gap-3">
            <a href="#">
              <img
                src={AppStore}
                alt="Download on the App Store"
                className="h-[42px] sm:h-[48px] object-contain hover:scale-105 duration-200"
              />
            </a>
            <a href="#">
              <img
                src={PlayStore}
                alt="Get it on Google Play"
                className="h-[42px] sm:h-[48px] object-contain hover:scale-105 duration-200"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PersonalisedSection;