"use client"
import Link from 'next/link'
import React from 'react'

const ResetButton = () => {
    const reset = () => {
        const form = document.querySelector('.form') as HTMLFormElement

        if (form) form.reset()
    }

    return (
        <Link href='/'>
            <button onClick={reset} className='btn'>X</button>
        </Link>
    )
}

export default ResetButton