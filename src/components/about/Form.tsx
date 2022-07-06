import { useForm } from 'react-hook-form';

export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data:any) => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="container">
      <input type="text" placeholder="First name" className="row m-2" {...register("First name", {required: true, maxLength: 80})} />
      <input type="text" placeholder="Last name" className="row m-2" {...register("Last name", {required: true, maxLength: 100})} />
      <input type="text" placeholder="Email" className="row m-2" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      <input type="tel" placeholder="Mobile number" className="row m-2" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} />
      <select {...register("Title", { required: true })} className="row m-2">
        <option value="Mr">Mr</option>
        <option value="Mrs">Mrs</option>
        <option value="Miss">Miss</option>
        <option value="Dr">Dr</option>
      </select>
     <label className="m-2">Gender :-</label>
      <label>Male<input className="m-2" {...register("Developer", { required: true })} type="radio" value="Yes" /></label>
      <label>Female<input className="m-2" {...register("Developer", { required: true })} type="radio" value="No" /></label>

      <input type="submit" className="row m-2"/>
    </form>
  );
}