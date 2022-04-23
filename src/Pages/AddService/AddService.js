import React from 'react'
import { useForm } from 'react-hook-form'

const AddService = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log(data)
        const url = 'http://localhost:5000/service'
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result)
            })
    }
    return (
        <div className="w-50 mx-auto">
            <h1>Please Add a Service</h1>
            <form
                className="d-flex flex-column"
                onSubmit={handleSubmit(onSubmit)}
            >
                <input
                    className="m-2 p-2"
                    placeholder="Title"
                    {...register('name', {
                        required: true,
                        maxLength: 20,
                    })}
                />
                <textarea
                    className="m-2 p-2"
                    placeholder="Description"
                    {...register('description')}
                />
                <input
                    className="m-2 p-2"
                    placeholder="Price"
                    type="number"
                    {...register('price')}
                />
                <input
                    className="m-2 p-2"
                    placeholder="Photo URL"
                    type="tex"
                    {...register('img')}
                />
                <input className="m-2" type="submit" value="Add Service" />
            </form>
        </div>
    )
}

export default AddService
