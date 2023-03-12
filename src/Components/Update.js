import React from 'react'

const Update = () => {



  return (
    <div class="bg-grey-lighter min-h-screen flex flex-col">
    <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 class="mb-8 text-3xl text-center">Update User</h1>
            <input 
                type="text"
                class="block border border-grey-light w-full p-3 rounded mb-4"
                name="firstname"
                placeholder="FirstName" />

            <input 
                type="text"
                class="block border border-grey-light w-full p-3 rounded mb-4"
                name="lastname"
                placeholder="LastName" />

            <input 
                type="text"
                class="block border border-grey-light w-full p-3 rounded mb-4"
                name="number"
                placeholder="Phone no." />
            <input 
                type="date"
                class="block border border-grey-light w-full p-3 rounded mb-4"
                name="date"
                placeholder="Age" />

            <button
                type="submit"
                class="bg-purple-500 text-center font-bold py-3 px-4 rounded">
                    UPDATE
                </button>          
        </div>
    </div>
</div>
  )
}

export default Update