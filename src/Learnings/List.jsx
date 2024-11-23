import React, { useState,useEffect } from 'react';

 const List = ({getItems}) => {
    // const [listData,setListDat/a]    
    const[listData,setListData] = useState([])
    // console.log(listData)
    useEffect(()=>{
        setListData(getItems(5))
        console.log("we're here")
    },[getItems])

    return (
        <ul>
            {listData.map((i,index) => <li key={index}>{i}</li>)}
        </ul>
    )
}

export default List;