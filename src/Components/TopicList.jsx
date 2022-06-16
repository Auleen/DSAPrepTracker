import React, { Component } from 'react';
import Card from './Cards';
function Topiclist() {
    const list=[
        {
            name:"Arrays",
            total:50,
            completed:0,

        },
        {
            name:"Strings",
            total:30,
            completed:0,

        },
        {
            name:"Recursion",
            total:36,
            completed:0,

        },
        {
            name:"Pointers",
            total:10,
            completed:0,

        },
        {
            name:"Stacks and Queues",
            total:25,
            completed:0,

        },
        {
            name:"Linked Lists",
            total:20,
            completed:0,

        },

    ]
    return ( list.map((item,i)=>{
        return(
            <Card
            card={item}
            key={i}
            />
        );
    }) );
}

export default Topiclist;