import React, {useEffect, useState} from 'react'

const Card = () => {
    const [bookApi, setBookApi] = useState(initialState)

    useEffect(() => {
        FakerApi()
    }, [])

    const FakerApi = () => {
        fetch('https://fakerapi.it/api/v1/books?_quantity=20').then(response => response.json())
        .then(data => console.log(data.data));
    }


    return (
        <div></div>
    )
}

export default Card;