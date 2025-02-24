import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { _id, name, quantity, supplier, teste, category, details, photo } = coffee;
     const handleUpdateCoffee=event=>{
            event.preventDefault();
            const form=event.target;
            const name=form.name.value;
            const quantity=form.quantity.value;
            const supplier=form.supplier.value;
            const teste=form.teste.value;
            const category=form.category.value;
            const details=form.details.value;
            const photo=form.photo.value;
            const updatedCoffee={name,quantity,supplier,teste,category,details,photo};
            console.log(updatedCoffee);
            //send data to the server 
            fetch(`http://localhost:5000/coffee/${_id}`,{
                method:'PUT',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(updatedCoffee)
            })   
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.modifiedCount)
                {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Update Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                      })
                }
            })
        }
    return (
        <div className="bg-[#F4F3F0] p-24">
            <Link to='/' className="btn btn-ghost">Back To Home</Link>
            <h2 className="text-2xl font-bold">Update Coffee: {name}</h2>
            <form onSubmit={handleUpdateCoffee}>
                {/* form name and quantity row */}
                <div className="md:flex gap-8">
                    <div className="md:w-1/2">
                        <label>
                            <span className="text-xl">Coffee Name</span>
                        </label>
                        <br />
                        <input className="input w-full" placeholder="Coffee Name" defaultValue={name} name="name" type="text" />
                    </div>
                    <div className="md:w-1/2">
                        <label>
                            <span className="text-xl">Available Quantity </span>
                        </label>
                        <br />
                        <input className="input w-full" name="quantity" defaultValue={quantity} placeholder="Available Quantity" type="text" />
                    </div>

                </div>
                {/* form supplier and test row */}
                <div className="md:flex gap-8">
                    <div className="md:w-1/2">
                        <label>
                            <span className="text-xl">Supplier Name</span>
                        </label>
                        <br />
                        <input className="input w-full" placeholder="Supplier Name"  defaultValue={supplier} name="supplier" type="text" />
                    </div>
                    <div className="md:w-1/2">
                        <label>
                            <span className="text-xl">Teste </span>
                        </label>
                        <br />
                        <input className="input w-full" name="teste" placeholder="Teste"  defaultValue={teste} type="text" />
                    </div>

                </div>
                {/* form catagory and details row  */}
                <div className="md:flex gap-8">
                    <div className="md:w-1/2">
                        <label>
                            <span className="text-xl">Category</span>
                        </label>
                        <br />
                        <input className="input w-full" placeholder="Category"  defaultValue={category} name="category" type="text" />
                    </div>
                    <div className="md:w-1/2">
                        <label>
                            <span className="text-xl">Details </span>
                        </label>
                        <br />
                        <input className="input w-full" name="details" placeholder="Details"  defaultValue={details} type="text" />
                    </div>

                </div>
                {/* form photo URL */}
                <div className="">
                    <div className="">
                        <label>
                            <span className="text-xl">Photo URL</span>
                        </label>
                        <br />
                        <input className="input w-full" placeholder="Photo URL"  defaultValue={photo} name="photo" type="text" />
                    </div>
                </div>
                <input type="submit" value="Update Coffee" className="mt-8  btn w-full  bg-[#D2B48C]" />
            </form>
        </div>
    );
};

export default UpdateCoffee;