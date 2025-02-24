
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, setCoffees, coffees }) => {
    const { _id, name, quantity, supplier, teste,photo} = coffee;
    const handleDelete = _id => {
        console.log(_id);
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

                console.log('delete confirm');

                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success"
                            });
                            const remaining=coffees.filter(cof=>cof._id!==_id)
                            setCoffees(remaining);
                        }

                    })
            }
        });
    }
    return (
        <div className="card card-side bg-base-100 shadow-2xl p-2">
            <figure>
                <img
                    src={photo}
                    alt="Movie" />
            </figure>
            <div className="flex justify-between w-full  my-auto">
                <div>
                    <h2 className="card-title">Name: {name} </h2>
                    <p className="text-lg">Quantity: {quantity}</p >
                    <p className="text-lg">Supplier: {supplier}</p >
                    <p className="text-lg">Teste: {teste}</p>
                </div>
                <div className="join join-vertical space-y-3">
                    <button className="btn">View</button>
                    <Link to={`/updateCoffee/${_id}`}>
                    <button className="btn">Edit</button>
                    </Link>
                    <button
                        onClick={() => handleDelete(_id)}
                        className="btn btn-warning">X</button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;