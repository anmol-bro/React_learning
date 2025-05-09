import React from 'react'

function Card({username,btnText="visit me"}){                  //in the case user dev dont pass btnText we ca give a default value
    return (
    <>
     <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-lg w-60 h-60 mx-auto" src="https://tailwindcss.com/_next/static/media/cover.de1997f7.png" alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{username}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-blue-200 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:bg-blue-700">
        {btnText}  ➡
        </a>
    </div>
</div>
    </>)

}

export default Card