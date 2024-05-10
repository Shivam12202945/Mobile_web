import { useState, useEffect } from "react";
import axios from 'axios';

function Api() {
    // const [mob, setMob] = useState([]);

    // useEffect(() => {
    //     axios.get("https://app1.crazzyhub.com/api/product-list-by-main-category-list/", { 
    //         headers: { Authorization: '7c2b8693d001c79d4b5ed6ebc387ad6b862989dfjhjjhj' } 
    //     })
    //     .then((response) => {
    //         console.log(response.data.data[0].product_deatils);
    //         setMob(response.data.data[0]);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });
    // }, []); 

    return (
        <>
            <h1>Data from the Api</h1>
        </>
    );
}

export default Api;