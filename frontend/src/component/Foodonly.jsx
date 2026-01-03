import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
const Foodonly = () => {

    // 3 approch to do this using State from the react routerdom 
    // 2>props
    // 3>Fetch the whole data but for the sprcific card
    //using fetch best approch to to this 
    const { orderId } = useParams();
    // console.log(orderId)
    const [fooditem, setfooditem] = useState([])
    const fetchfood = async () => {
        const response = await fetch(`http://localhost:5000/api/order/${orderId}`);
        ;

        // if not successful, do not call .json()
        if (!response.ok) {
            console.error("Fetch failed:", response.status, response.statusText);
            return;
        }

        const data = await response.json();
        setfooditem(data);
    };
    useEffect(() => {
        fetchfood()
    }, [orderId])
    return (
        <div>
            {fooditem.name}
        </div>
    )
}


export default Foodonly