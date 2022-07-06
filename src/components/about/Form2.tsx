import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  firstName: string;
  lastName: string;
  age: number;
}

export default function Form2() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);
   
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="container">
      <input className="row m-2" placeholder="First Name" {...register("firstName", { required: true, maxLength: 20 })} />
      <input className="row m-2" placeholder="Last Name" {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
      <input className="row m-2" placeholder="Number" type="number" {...register("age", { min: 18, max: 99 })} />
      <input className="row m-2" type="submit" />
    </form>
  );
}