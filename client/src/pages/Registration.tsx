import React from 'react';


const Registration: React.FC = () => {
    return (
        <div
            className='flex justify-center items-center'
            style={{height: window.innerHeight - 54}}
        >
            <div className='p-5 w-[600px] h-[300px] rounded-2xl border-2 border-red-600'>
                <h2 className='ml-auto p-4'>Authorization</h2>
                <form className='mt-4 flex flex-col gap-4'>
                    <input
                        className='w-full border-gray-400 border-2 px-2 pb-1.5 text-primary outline-none text-base font-light rounded-md'
                        placeholder='Email' type="email"/>
                    <input
                        className='w-full border-gray-400 border-2 px-2 pb-1.5 text-primary outline-none text-base font-light rounded-md'
                        placeholder='password' type="password"/>
                    <div className='flex justify-between '>
                        <button className="mt-5 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                            Sign Up
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Registration;