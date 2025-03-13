import { motion } from "framer-motion";

const Section7 = () => {
  return (
    <div className="bg-white py-20 flex justify-center">
      <div className="px-4 md:px-0 w-full sm:w-[608px] md:w-[768px] lg:w-[1024px] xl:w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="font-bold text-4xl md:text-5xl lg:text-6xl text-black"
        >
          <p className="">Trusted by 300,000+ users worldwide</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:flex md:justify-center md:items-center mt-15"
        >
          <div className="mx-5 pt-2 md:mx-12 lg:mx-18.5">
            <div className="flex justify-center">
              <img
                src="../../public/assets/icons/pngwing.com.png"
                alt="soc-logo"
                className="w-21"
              />
            </div>
            <div className="flex justify-center items-center">
              <p className="font-bold text-black text-3xl">4.5</p>
              <i className="fas fa-star text-lg text-[#FC6423] ml-1.75" />
            </div>
            <p className="text-gray-600 text-md mt-2">On G2</p>
          </div>
          <div className="mx-5 md:mt-0 md:mx-12 lg:mx-18.5">
            <div className="flex justify-center">
              <img
                src="../../public/assets/icons/Trustpilot.png"
                alt="soc-logo"
                className="w-20"
              />
            </div>
            <div className="flex justify-center items-center">
              <p className="font-bold text-black text-3xl">3.9</p>
              <i className="fas fa-star text-lg text-[#FC6423] ml-1.75" />
            </div>
            <p className="text-gray-600 text-md mt-2">On Trustpilot</p>
          </div>
          <div className="mx-2.5 mt-7 md:mx-9 md:mt-0 lg:mx-12">
            <div className="flex justify-center">
              <img
                src="../../public/assets/icons/google-store.png"
                alt="soc-logo"
                className="w-12"
              />
            </div>
            <div className="flex justify-center items-center">
              <p className="font-bold text-black text-3xl">4.9</p>
              <i className="fas fa-star text-lg text-[#FC6423] ml-1.75" />
            </div>
            <p className="text-gray-600 text-md mt-2">On Chrome Store</p>
          </div>
          <div className="mx-5 mt-6 md:mt-0 md:mx-12 lg:mx-18.5">
            <div className="flex justify-center">
              <img
                src="../../public/assets/icons/capterra.png"
                alt="soc-logo"
                className="w-12"
              />
            </div>
            <div className="flex justify-center items-center">
              <p className="font-bold text-black text-3xl">4.0</p>
              <i className="fas fa-star text-lg text-[#FC6423] ml-1.75" />
            </div>
            <p className="text-gray-600 text-md mt-2">On Capterra</p>
          </div>
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-15 gap-6 w-[638px] md:w-[736px] lg:w-[1024px] xl:w-[1152px]"
          >
            <div className="bg-[#F4F1ED] p-6 rounded-lg">
              <div className="flex justify-start gap-3">
                <img
                  className="rounded-full"
                  src="https://lh3.googleusercontent.com/a/ACg8ocL5-b-fO-kGcoDt2WlBNVZpe0JX6HkpOcwpJi1K5RayXl5-ig=s48-w48-h48"
                />
                <div>
                  <p className="font-semibold text-black">marcelon costello</p>
                  <div className="flex justify-start gap-1">
                    <i className="fas fa-star text-sm text-[#DE7932]" />
                    <i className="fas fa-star text-sm text-[#DE7932]" />
                    <i className="fas fa-star text-sm text-[#DE7932]" />
                    <i className="fas fa-star text-sm text-[#DE7932]" />
                    <i className="fas fa-star text-sm text-[#DE7932]" />
                  </div>
                </div>
              </div>
              <p class="text-[#6C6C6C] text-left text-sm flex justify-start mt-3">
                Easy to use and very effective.
              </p>
            </div>
            <div className="bg-[#F4F1ED] p-6 rounded-lg">
              <div className="flex justify-start gap-3">
                <img
                  className="rounded-full"
                  src="https://lh3.googleusercontent.com/a-/ALV-UjWCgUl_XqIHcXVqwTL5k76vM9EqO5SAIZ2J5mWyWC83LZ-dffDA=s48-w48-h48"
                />
                <div>
                  <p className="font-semibold text-black">Md Monirul Islam</p>
                  <div className="flex justify-start gap-1">
                    <i className="fas fa-star text-sm text-[#DE7932]" />
                    <i className="fas fa-star text-sm text-[#DE7932]" />
                    <i className="fas fa-star text-sm text-[#DE7932]" />
                    <i className="fas fa-star text-sm text-[#DE7932]" />
                    <i className="fas fa-star text-sm text-[#DE7932]" />
                  </div>
                </div>
              </div>
              <p class="text-[#6C6C6C] text-left text-sm flex justify-start mt-3">
                Perfect
              </p>
            </div>
            <div className="bg-[#F4F1ED] p-6 rounded-lg">
              <div className="flex justify-start gap-3">
                <img
                  className="rounded-full"
                  src="https://lh3.googleusercontent.com/a/ACg8ocKVLRQ6FNOEkWAn3p9-F-FvpSN7DbNoWlOr-yqUIbMm27Axrg=s48-w48-h48"
                />
                <div>
                  <p className="font-semibold text-black">Natascha</p>
                  <div className="flex justify-start gap-1">
                    <i className="fas fa-star text-sm text-[#DE7932]" />
                    <i className="fas fa-star text-sm text-[#DE7932]" />
                    <i className="fas fa-star text-sm text-[#DE7932]" />
                    <i className="fas fa-star text-sm text-[#DE7932]" />
                    <i className="fas fa-star text-sm text-[#DE7932]" />
                  </div>
                </div>
              </div>
              <p class="text-[#6C6C6C] text-left text-sm flex justify-start mt-3">
                Works great!
              </p>
            </div>
            <div className="bg-[#F4F1ED] p-6 rounded-lg">
              <div className="flex justify-start gap-3">
                <img
                  className="rounded-full"
                  src="https://lh3.googleusercontent.com/a-/ALV-UjUbNUFpoo4JRUO0_tMZXphY7b39mSx1fJ-xsHAXcquA_BGi6Cv1=s48-w48-h48"
                />
                <div>
                  <p className="font-semibold text-black">
                    Shahrzad Ramtinfard
                  </p>
                  <div className="flex justify-start gap-1">
                    <i className="fas fa-star text-sm text-[#DE7932]" />
                    <i className="fas fa-star text-sm text-[#DE7932]" />
                    <i className="fas fa-star text-sm text-[#DE7932]" />
                    <i className="fas fa-star text-sm text-[#DE7932]" />
                    <i className="fas fa-star text-sm text-[#DE7932]" />
                  </div>
                </div>
              </div>
              <p class="text-[#6C6C6C] text-left text-sm flex justify-start mt-3">
                very good
              </p>
            </div>
            <div className="bg-[#F4F1ED] p-6 rounded-lg">
              <div className="flex justify-start gap-3">
                <img
                  className="rounded-full"
                  src="https://lh3.googleusercontent.com/a-/ALV-UjX6F8AceyGIzra0M-wXH1umjQcRgn-xdsYGJsRgha7xj7IzFqc=s48-w48-h48"
                />
                <div>
                  <p className="font-semibold text-black">shelrai boltem</p>
                  <div className="flex justify-start gap-1">
                    <i className="fas fa-star text-sm text-[#DE7932]" />
                    <i className="fas fa-star text-sm text-[#DE7932]" />
                    <i className="fas fa-star text-sm text-[#DE7932]" />
                    <i className="fas fa-star text-sm text-[#DE7932]" />
                    <i className="fas fa-star text-sm text-[#DE7932]" />
                  </div>
                </div>
              </div>
              <p class="text-[#6C6C6C] text-left text-sm flex justify-start mt-3">
                The AI suggestions are usually spot-on. Makes my job much
                easier.
              </p>
            </div>
            <div className="bg-[#F4F1ED] p-6 rounded-lg">
              <div className="flex justify-start gap-3">
                <img
                  className="rounded-full"
                  src="https://lh3.googleusercontent.com/a-/ALV-UjXPIFuxYWRiIE9VYpX78uWHzU_33S8jYHCymtxpfEuYEc6WDuk=s48-w48-h48"
                />
                <div>
                  <p className="font-semibold text-black">Bernadette Cobb</p>
                  <div className="flex justify-start gap-1">
                    <i className="fas fa-star text-sm text-[#DE7932]" />
                    <i className="fas fa-star text-sm text-[#DE7932]" />
                    <i className="fas fa-star text-sm text-[#DE7932]" />
                    <i className="fas fa-star text-sm text-[#DE7932]" />
                    <i className="fas fa-star text-sm text-[#DE7932]" />
                  </div>
                </div>
              </div>
              <p class="text-[#6C6C6C] text-left text-sm flex justify-start mt-3">
                Excellent extension. Saves me a lot of time daily.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Section7;
