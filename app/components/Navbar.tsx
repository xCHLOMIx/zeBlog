"use client"
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React, { FormEvent } from 'react'

const Navbar = () => {
    const { data: session } = useSession()

    return (
        <header className='bg-white'>
            <nav className='flex justify-between items-center p-3 px-5'>
                <Link href='/'>
                    <Image src='/logo.png' alt='Logo' width={100} height={24} />
                </Link>
                <div className='flex gap-5 text-black'>
                    {session && session?.user ? (
                        <>
                            <Link href='/blog/create'>
                                Create
                            </Link>
                            <button onClick={async () => await signOut()}>
                                Log out
                            </button>
                            <Link href={`/user/${session?.user?.id}`}>
                                {session?.user.name}
                            </Link>
                        </>
                    ) : (
                        <button onClick={async () => signIn('github')} type='submit'>
                            Log in
                        </button>
                    )}
                </div>
            </nav>
        </header>
    )
}

export default Navbar