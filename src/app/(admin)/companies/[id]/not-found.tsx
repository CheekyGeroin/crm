'use client'
import React, {useEffect} from 'react';
import Link from "next/link";
import {notFound} from "next/navigation";

export interface NotFoundProps{
}

export default  function NotFound({}:NotFoundProps) {

    return (
        <div>
            <p> Could not found company</p>
            <Link href='/companies' className='text-blue-500'>Bact to companies</Link>
        </div>
    );
}

