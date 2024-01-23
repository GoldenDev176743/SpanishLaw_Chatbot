"use client";

import { ClockIcon, MapIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { Formik } from "formik";
import * as Yup from "yup";
import Image from "next/image";

import BackImage from "@/assets/parallax1.jpg";
import MarkImage from "@/assets/mark1.png";

const Contact = () => {
  return (
    <div className="relative min-h-screen">
      <Image
        src={BackImage}
        alt="background"
        fill
        style={{
          objectFit: "cover",
        }}
        priority
      />
      <div className="fixed inset-0 overflow-y-scroll flex justify-center">
        <div className="flex flex-col max-w-[1200px] w-full mt-36 px-24 text-center">
          <div className="text-5xl font-semibold text-center font-oswald text-zinc-900">
            Contact{" "}
            <span className="md:decoration-yellow-600 md:decoration-2 md:underline md:underline-offset-[15px]">
              Info
            </span>
            mations
          </div>
          <div className="relative flex mt-20 bg-zinc-50 bg-opacity-50 shadow-lg shadow-zinc-300 w-full self-center p-4">
            <div className="w-full h-full border border-yellow-600 p-8">
              <div className="md:flex">
                <div className="flex basis-1/2 flex-col font-playpen_sans text-black px-4 text-[14px]">
                  <div className="text-[25px] font-semibold font-oswald text-start">
                    <span className="decoration-yellow-600 decoration-4 underline underline-offset-[15px]">
                      Contac
                    </span>
                    t Form
                  </div>
                  <Formik
                    initialValues={{
                      fullName: "",
                      email: "",
                      phone: "",
                      message: "",
                    }}
                    validationSchema={Yup.object().shape({
                      fullName: Yup.string()
                        .max(20)
                        .required("Full Name is required"),
                      email: Yup.string()
                        .email("Must a valid Email")
                        .max(50)
                        .required("Email is required"),
                      phone: Yup.string()
                        .max(30)
                        .required("Phone Number is required"),
                      message: Yup.string().required("Please input message"),
                    })}
                    onSubmit={(
                      values,
                      { setErrors, setStatus, setSubmitting }
                    ) => {
                      try {
                        // handle submit
                      } catch (error) {
                        // handle error
                      }
                    }}
                  >
                    {({
                      errors,
                      handleBlur,
                      handleChange,
                      handleSubmit,
                      isSubmitting,
                      touched,
                      values,
                    }) => (
                      <form noValidate onSubmit={handleSubmit}>
                        <input
                          id="fullName"
                          type="text"
                          name="fullName"
                          value={values.fullName}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          placeholder="Full Name"
                          onError={() => {
                            Boolean(touched.fullName && errors.fullName);
                          }}
                          className="w-full mt-10 border border-zinc-300 focus:border-zinc-500 outline-none p-2 focus:placeholder-transparent"
                        />
                        {/* {touched.fullName && errors.fullName && (
                        <div id="error-fullName" className="text-red-500">
                          {errors.fullName}
                        </div>
                      )} */}
                        <input
                          id="email"
                          type="email"
                          name="email"
                          value={values.email}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          placeholder="E-mail address"
                          onError={() => {
                            Boolean(touched.email && errors.email);
                          }}
                          className="w-full mt-2 border border-zinc-300 focus:border-zinc-500 outline-none p-2 focus:placeholder-transparent"
                        />
                        {/* {touched.email && errors.email && (
                        <div id="error-email" className="text-red-500">
                          {errors.email}
                        </div>
                      )} */}
                        <input
                          id="phone"
                          type="text"
                          name="phone"
                          value={values.phone}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          placeholder="Phone"
                          onError={() => {
                            Boolean(touched.phone && errors.phone);
                          }}
                          className="w-full mt-2 border border-zinc-300 focus:border-zinc-500 outline-none p-2 focus:placeholder-transparent"
                        />
                        {/* {touched.phone && errors.phone && (
                        <div id="error-phone" className="text-red-500">
                          {errors.phone}
                        </div>
                      )} */}
                        <textarea
                          id="message"
                          name="message"
                          value={values.message}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          placeholder="Message"
                          onError={() => {
                            Boolean(touched.message && errors.message);
                          }}
                          className="w-full mt-2 border border-zinc-300 focus:border-zinc-500 outline-none p-2 focus:placeholder-transparent"
                        />
                        {/* {touched.message && errors.message && (
                        <div id="error-message" className="text-red-500">
                          {errors.message}
                        </div>
                      )} */}
                        <div className="flex my-5 border border-yellow-600 items-center justify-center self-center bg-white w-[150px] h-[45px]">
                          <button
                            disabled={isSubmitting}
                            type="submit"
                            className="duration-300 text-black font-semibold bg-yellow-600 hover:bg-black hover:text-white font-oswald w-[142px] h-[36px]"
                          >
                            SEND MESSAGE
                          </button>
                        </div>
                      </form>
                    )}
                  </Formik>
                </div>
                <div className="flex basis-1/2 flex-col font-medium font-playpen_sans text-black px-4">
                  <div className="text-[25px] font-semibold font-oswald text-start">
                    <span className="decoration-yellow-600 decoration-4 underline underline-offset-[15px]">
                      Addres
                    </span>
                    s
                  </div>
                  <div className="flex gap-3 mt-10 items-center text-[15px]">
                    <MapIcon className="w-5 h-5" />
                    <span>2 Derry St, Kensington, London W8 5HY, UK</span>
                  </div>
                  <div className="flex gap-3 mt-5 items-center text-[15px]">
                    <PhoneIcon className="w-5 h-5 self-start" />
                    <div className="flex flex-col gap-1">
                      <div>+ 44 20 3367 7000</div>
                      <div>+ 44 20 3367 7000</div>
                    </div>
                  </div>
                  <div className="flex gap-3 mt-5 mb-20 items-center text-[15px]">
                    <ClockIcon className="w-5 h-5" />
                    <span>Mon to Sat: 9:0 to 18:00</span>
                  </div>
                </div>
              </div>
            </div>
            <Image
              src={MarkImage}
              alt="mark-image"
              className="absolute bottom-0 inset-x-0 translate-y-[130px] lg:translate-x-[320px] md:translate-x-[200px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
