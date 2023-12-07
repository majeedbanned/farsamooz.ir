// components/ContactUsForm.tsx
"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactUsForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      // Send form data to your server using the API route
      await axios.post("/api/contact", data);

      // Optionally, you can reset the form after successful submission
      reset();
      alert("Your message has been sent successfully!");
    } catch (error) {
      console.error("Error sending the form data:", error);
      alert(
        "An error occurred while sending your message. Please try again later."
      );
    }
  };

  return (
    <div className="max-w-md mx-auto h-[600px] mt-8 flex justify-center items-start ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-6 absolute z-[999] w-2/3 sm:w-1/3"
        dir="rtl"
      >
        <div>
          <label htmlFor="name" className="block text-xl text-gray-700">
            نام شما
          </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "نام الزامی است" })}
            className="mt-1 p-2 border w-full rounded"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-xl text-gray-700">
            ایمیل شما
          </label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "ایمیل الزامی است",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "ایمیل نامعتبر است",
              },
            })}
            className="mt-1 p-2 border w-full rounded"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-xl text-gray-700">
            پیام شما
          </label>
          <textarea
            id="message"
            {...register("message", { required: "پیام الزامی است" })}
            rows={4}
            className="mt-1 p-2 border w-full rounded"
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message.message}</p>
          )}
        </div>

        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            ارسال پیام
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUsForm;
