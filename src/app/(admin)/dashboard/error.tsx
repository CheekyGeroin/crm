'use client'
import React from 'react';
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;
import Button from "@/app/components/button";

export  interface  ErrorProps{
error: Error,
    reset:()=> void
}

export default function Error({error, reset}:ErrorProps) {
    return (
        <div>
            <p>{`Something went wrong ${error.message}`}</p>
            <Button onClick={()=>reset()}>Try again</Button>
        </div>
    );
}

