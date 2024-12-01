import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {

  const coffee = useLoaderData();
  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;

  const handleUpdateCoffee = (e) => {
    e.preventDefault();

        const name = e.target.name.value;
        const chef = e.target.chef.value;
        const supplier = e.target.supplier.value;
        const taste = e.target.taste.value;
        const category = e.target.category.value;
        const details = e.target.details.value;
        const photo = e.target.photo.value;

        const updateCoffee = { name, chef, supplier, taste, category, details, photo }
    console.log(updateCoffee)
    // send data to server

    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type':'application/json'
      },
      body:JSON.stringify(updateCoffee)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.modifiedCount>0) {
          Swal.fire({
                title: 'success',
                text: 'Update successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
          
          }
    })
  }


  return (
    <div className='lg:w-3/4 mx-auto'>
            <div className="text-center p-10">
        <h1 className="text-5xl font-bold">Update Coffee : {name}</h1>
                <p className="py-6">
                    Provident cupiditate voluptatem et in.Quaerat fugiat ut assumenda excepturi exercitationem
                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
            </div>
            <div className="card  w-full shrink-0 shadow-2xl bg-[#F4F3F0]">
                <form onSubmit={handleUpdateCoffee}  className="card-body">
                    {/* form first row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' defaultValue={name} placeholder="coffee name" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Chef</span>
                            </label>
                            <input type="text" name='chef' defaultValue={chef} placeholder="chef name" className="input input-bordered" required />
                        </div>
                    </div>
                    {/* form second row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Supplier</span>
                            </label>
                            <input type="text" name='supplier' defaultValue={supplier}  placeholder="coffee supplier" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Taste</span>
                            </label>
                            <input type="text" name='taste' defaultValue={taste} placeholder="taste name" className="input input-bordered" required />
                        </div>
                    </div>
                    {/* form third row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <input type="text" name='category' defaultValue={category} placeholder="coffee Category" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <input type="text" name='details' defaultValue={details} placeholder="Coffee Details" className="input input-bordered" required />
                        </div>
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name='photo' defaultValue={photo} placeholder="Photo url" className="input input-bordered" required />

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Update Coffee</button>
                    </div>
                </form>
            </div>
        </div>
  );
};

export default UpdateCoffee;