import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import ToysRow from "./ToysRow";
import Swal from "sweetalert2";
import UpdatedModal from "./UpdatedModal";
import { Helmet } from "react-helmet";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [show, setShow] = useState(false);
  const [editedToy, setEditedToy] = useState({});
  const [control, setControl] = useState(false);
  const url = `https://heroic-toy-hub-server-shafaet-j.vercel.app/myToys?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [control]);

  const handleShow = (_id, price, description, available_quantity) => {
    setEditedToy({ _id, price, description, available_quantity });
    setShow(true);
  };

  const handleClose = () => setShow(false);

  const handleDelete = (id) => {
    fetch(`https://heroic-toy-hub-server-shafaet-j.vercel.app/toys/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
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
      <Helmet>
        <title>My Toy</title>
      </Helmet>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Reviews</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {myToys.map((toy) => (
              <ToysRow
                handleDelete={handleDelete}
                key={toy._id}
                toy={toy}
                handleShow={handleShow}
              ></ToysRow>
            ))}
          </tbody>
        </table>
      </div>
      {show && <UpdatedModal editedToy={editedToy} myToys={myToys} handleClose={handleClose} />}
    </section>
  );
};

export default MyToys;
