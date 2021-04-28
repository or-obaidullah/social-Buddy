import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Cart from '../Cart/Cart';



const CartDetail = () => {
    const {id} = useParams();
    const [userDetail, setUserDetail] = useState([]);
    const [comments, setComments] = useState([]);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res =>res.json())
        .then(data => setUserDetail(data))

        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(res =>res.json())
        .then(data => setComments(data))  
    },[])

    
    return (
        <div className='home-container'>
            <Cart seeMoreButton={false} cart={userDetail} comment={comments}></Cart>
        </div>
    );
};

export default CartDetail;