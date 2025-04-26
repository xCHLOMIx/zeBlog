import React from 'react'
import Form from 'next/form'
import ResetButton from './ResetButton'

const SearchForm = () => {
    const search = "Test"

    return (
        <div className='px-10 flex justify-center w-full'>
            <Form action='/' scroll={false} className='bg-white form px-0.5 flex w-full max-w-xl max-lg:text-4xl outline-black outline-6 max-md:text-3xl rounded-xl overflow-hidden max-sm:text-xl'>
                <input name='search' type="text" defaultValue={search} className='w-full py-3.5 pl-3.5 text-black outline-0' placeholder='Search Blogs' />
                <div className='flex p-2 gap-2'>
                    {search && <ResetButton />}
                    <button className='btn'>S</button>
                </div>
            </Form>
        </div>
    )
}

export default SearchForm