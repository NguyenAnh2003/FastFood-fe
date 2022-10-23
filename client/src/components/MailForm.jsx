import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function MailForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <React.Fragment>
      <form action="POST" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid md:grid-cols-3 gird-cols-1 gap-4 flex justify-center items-center">
          <div className="md:ml-auto md:mb-6">
            <p className="">
              <strong>Liên hệ qua email</strong>
            </p>
          </div>

          <div className="md:mb-6">
            <input
              type="text"
              className="mail-form"
              id="exampleFormControlInput1"
              placeholder="Email address"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
          </div>

          <div className="md:mr-auto mb-6">
            <button type="submit" className="subsribe-btn">
              Subscribe
            </button>
          </div>
        </div>
        {errors.email?.type === "required" && (
          <p className="text-xs text-red-500 mb-3">Email is required</p>
        )}
        {errors.email?.type === "pattern" && (
          <p className="text-xs text-red-500 mb-3">Invalid email syntax</p>
        )}
      </form>
    </React.Fragment>
  );
}
