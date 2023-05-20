import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const AddToys = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch("https://heroic-toy-hub-server-shafaet-j.vercel.app/addToys", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          Swal.fire("Good job!", "You Have added the toy!", "success");
        }
        console.log(result);
      })
      .catch((error) => console.log(error));
  };

  const options = [
    { label: "Truck Toy", value: "truck" },
    { label: "Regular Car", value: "regular" },
    { label: "Police Car Toy", value: "police" },
    { label: "Mini Fire truck", value: "fire" },
  ];

  return (
    <section className=" mx-auto container my-6">
      <Helmet>
        <title>Add Toy</title>
      </Helmet>
      <h2 className=" text-5xl font-bold text-center my-8">
        Add Toys in your website
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" grid grid-cols-2 gap-5">
          {/* register your input into the hook by invoking the "register" function */}
          <input
            className="input input-bordered"
            placeholder="photo url"
            {...register("picture_url")}
          />
          <input
            className="input input-bordered"
            placeholder="Toys name"
            {...register("name")}
          />
          <input
            className="input input-bordered"
            defaultValue={user?.displayName}
            {...register("seller_name")}
          />
          <input
            className="input input-bordered"
            defaultValue={user?.email}
            {...register("seller_email")}
          />
          {/* <input
            className="input input-bordered"
            placeholder="sub category"
            {...register("sub_category")}
          /> */}
          <div>
            {/* <label htmlFor="subcategory">Subcategory:</label> */}
            <select
              className="select select-bordered w-full"
              id="subcategory"
              {...register("subcategory")}
            >
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <input
            className="input input-bordered"
            placeholder="Toy price"
            {...register("price")}
          />
          <input
            className="input input-bordered"
            placeholder="Toy rating"
            {...register("rating")}
          />
          <input
            className="input input-bordered"
            placeholder="available_quantity"
            {...register("available_quantity")}
          />
          <input
            className="input input-bordered col-span-2"
            placeholder="Add product description"
            {...register("description")}
          />

          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}
        </div>
        <input
          className="btn w-full my-5"
          type="submit"
          value="Add your product"
        />
      </form>
    </section>
  );
};

export default AddToys;
