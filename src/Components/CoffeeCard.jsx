import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  
  const { _id, name, chef, supplier, taste, category, details, photo } = coffee
  
  const handelDelete = _id => {
    console.log(_id)
    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method:'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.deletedCount > 0) {
            Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
            });
          const remaining = coffees.filter(cof => cof._id !== _id);
          setCoffees(remaining)
        }
    })
  }
});
  }


  return (
    <div className="card card-side bg-base-100 shadow-xl">
  <figure>
    <img
      src={photo}
      alt="Movie" />
  </figure>
  <div className="flex w-full justify-between pr-5">
        <div>
        <h2 className="card-title">Name: {name}</h2>
        <p>{supplier}</p>
        <p>{taste}</p>
        </div>
    <div className="card-actions justify-end">
      <div className="join join-vertical space-y-3">
        <button className="btn join-item">View</button>
            <Link to={`/updatecoffee/${_id}`}>
              <button className="btn join-item">Edit</button>
            </Link>
        <button
        onClick={()=>handelDelete(_id)}
        className="btn join-item">Delete</button>
    </div>
    </div>
  </div>
    </div>
  )
};

export default CoffeeCard;