import React from 'react'
import { useParams } from 'react-router-dom'
import useServiceDetail from '../../../hooks/useServiceDetail'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../../firebase.init'
import axios from 'axios'
import { toast } from 'react-toastify'

const Checkout = () => {
    const { serviceId } = useParams()
    const [service] = useServiceDetail(serviceId)
    const [user] = useAuthState(auth)

    const handelPlaceOrder = (e) => {
        e.preventDefault()
        const order = {
            email: e.target.email.value,
            service: service.name,
            serviceId: serviceId,
            address: e.target.address.value,
            phone: e.target.phone.value,
        }
        axios
            .post('http://localhost:5000/order', order)
            .then(function (response) {
                const { data } = response
                if (data?.insertedId) {
                    toast('Your order is booked')
                    e.target.reset()
                }
            })
    }
    return (
        <div className="w-50 mx-auto mt-5">
            <h2 className="text-primary text-center">
                Please Order: {service.name}
            </h2>
            <form onSubmit={handelPlaceOrder}>
                <input
                    className="w-100 mb-2"
                    type="text"
                    name="name"
                    value={user?.displayName}
                    placeholder="Your Name"
                    id=""
                    readOnly
                    disabled
                />
                <br />
                <input
                    className="w-100 mb-2"
                    type="email"
                    name="email"
                    value={user?.email}
                    placeholder="Your Email"
                    id=""
                    readOnly
                    disabled
                />
                <br />
                <input
                    className="w-100  mb-2"
                    type="text"
                    name="service"
                    value={service.name}
                    placeholder="Service"
                    id=""
                    readOnly
                    disabled
                />
                <br />
                <input
                    className="w-100 mb-2"
                    type="text"
                    name="address"
                    placeholder="Your Address"
                    id=""
                    autoComplete="off"
                />
                <br />
                <input
                    className="w-100 mb-2"
                    type="number"
                    name="phone"
                    placeholder="Your Phone Number"
                    id=""
                />
                <br />
                <input
                    className="btn btn-primary"
                    type="submit"
                    value="Place Order"
                />
            </form>
        </div>
    )
}

export default Checkout
