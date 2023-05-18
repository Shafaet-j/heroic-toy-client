import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import ToysRow from "./ToysRow";
import Swal from "sweetalert2";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [control, setControl] = useState(false);
  const url = `http://localhost:5000/myToys?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [control]);

  const handleDelete = (id) => {
    console.log("delete", id);
    fetch(`http://localhost:5000/toys/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
              setControl(!control);
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
        }
      });
  };

  return (
    <section className="container mx-auto">
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Reviews</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {myToys.map((toy) => (
              <ToysRow
                handleDelete={handleDelete}
                key={toy._id}
                toy={toy}
              ></ToysRow>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MyToys;
