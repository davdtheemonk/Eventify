"use client";
import { useForm } from "react-hook-form";

const page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <section className="min-h-svh flex flex-col items-center   justify-center text-[#E8EEEE] ">
      <div className="flex justify-evenly w-full m-2 p-2 ">
        <h4>Welcome user</h4>
        <p>create an event here</p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 place-content-evenly place-items-center border-collapse md:w-[70vw] md:h-[80vh] sm:h-svh sm:w-svw rounded-md p-2 m-2 shadow-sm shadow-slate-200 mt-2"
      >
        <div className="flex flex-col gap-4  w-2/3">
          <label className="capitalize text-lg">name</label>
          <input
            className="p-2 bg-[#E8EEEE] rounded-md outline-none text-slate-900 tracking-wider"
            {...register("name")}
          />
        </div>
        <div className="flex flex-col gap-4  w-2/3">
          <label className="capitalize  text-lg">Description</label>
          <input
            className="p-2 bg-[#E8EEEE] rounded-md outline-none text-slate-900 tracking-wider"
            {...register("description")}
          />
        </div>
        <div className="flex flex-col gap-4  w-2/3">
          <label className="capitalize  text-lg">Location</label>
          <input
            className="p-2 bg-[#E8EEEE] rounded-md outline-none text-slate-900 tracking-wider"
            {...register("location")}
          />
        </div>
        <div className="flex flex-col gap-4  w-2/3">
          <label className="capitalize  text-lg">deadline</label>
          <input
            type="date"
            className="p-2 bg-[#E8EEEE] rounded-md outline-none  text-slate-900 tracking-wider"
            {...register("deadline")}
          />
        </div>
        <div className="flex flex-col gap-4  w-2/3">
          <label className="capitalize  text-lg">Date</label>
          <input
            type="date"
            className="p-2 bg-[#E8EEEE] rounded-md outline-none text-slate-900 tracking-wider "
            {...register("date")}
          />
        </div>
        <div className="flex flex-col gap-4 self-center  w-2/3">
          <button type="submit" className="btn self-center btn-primary btn-md">
            Create
          </button>
        </div>
      </form>
    </section>
  );
};

export default page;

// todo
