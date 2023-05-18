import React, { useState } from "react";
import Swal from "sweetalert2";

const ToysRow = ({ toy, handleDelete }) => {
  const {
    _id,
    picture_url,
    name,
    seller_name,
    seller_email,
    price,
    description,
    rating,
  } = toy;

  return (
    <tr>
      <th></th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-24 h-24">
              <img
                src={picture_url && picture_url}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">Product :{name}</div>
            <div className="text-sm opacity-50">{seller_name}</div>
            <div className="text-sm opacity-50">{seller_email}</div>
          </div>
        </div>
      </td>
      <td>{description.slice(0, 90)}...</td>
      <td>${price}</td>
      <td>{rating}</td>
      <th className=" space-x-8">
        <button className="btn btn-ghost btn-xs">Update</button>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-ghost btn-xs"
        >
          Delete
        </button>
      </th>
    </tr>
  );
};

export default ToysRow;
