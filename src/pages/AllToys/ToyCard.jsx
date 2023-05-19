import React from "react";
import { Link } from "react-router-dom";

const ToyCard = ({ toy }) => {
  const {
    picture_url,
    name,
    seller_name,
    seller_email,
    price,
    description,
    rating,
    _id,
  } = toy;
  return (
    <tr data-aos="fade-up">
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
      <th>
        <Link to={`/toys/${_id}`}>
          <button className="btn btn-ghost btn-xs">details</button>
        </Link>
      </th>
    </tr>
  );
};

export default ToyCard;
