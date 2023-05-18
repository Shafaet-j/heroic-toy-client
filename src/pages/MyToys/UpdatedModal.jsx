import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const UpdatedModal = ({ editedToy, handleClose, setMyToys, myToys }) => {
  const { _id, available_quantity, description, price } = editedToy;
  const { register, handleSubmit } = useForm();

  const handleUpdateToy = (data) => {
    const updateToy = {
      available_quantity: data.available_quantity,
      price: data.price,
      description: data.description,
    };
    const exist = myToys.find((toy) => toy._id === _id);
    exist.available_quantity = updateToy.available_quantity;
    exist.price = updateToy.price;
    exist.description = updateToy.description;
    fetch(`http://localhost:5000/toys/${_id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updateToy),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount > 0) {
          handleClose();
          toast.success("Toy Successfully Updated!");
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form onSubmit={handleSubmit(handleUpdateToy)} className=" p-5">
            <input
              className="input input-bordered w-full mb-5"
              defaultValue={price}
              type="text"
              name="price"
              {...register("price")}
            />
            <input
              defaultValue={available_quantity}
              className="input input-bordered w-full mb-5"
              type="text"
              name="available_quantity"
              {...register("available_quantity")}
            />
            <input
              defaultValue={description}
              className="input input-bordered w-full mb-5"
              type="text"
              name="description"
              {...register("description")}
            />
            <button className=" btn btn-primary" type="submit">
              {" "}
              Update Toy
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdatedModal;
