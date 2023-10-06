"use client"
import axios from 'axios';
import { useParams } from 'next/navigation';
import React from 'react';
import { useQuery } from 'react-query';

const PackagesDetails = () => {
    const params = useParams();
    const id = params.id;

    const { data } = useQuery("package", () =>
        axios(`http://localhost:5000/packages/${id}`)
    );
    console.log(data);
    return (
        <>

        </>
    );
};

export default PackagesDetails;