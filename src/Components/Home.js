import React from "react";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  const AddUser = () => {
    navigate("/add");
  };

  return (
    <div class="antialiased bg-gray-100 text-gray-600 h-screen px-4">
      <div class="flex flex-col justify-center h-full">
        <div class="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
          <header class="px-5 py-4 border-b border-gray-100">
            <h2 class="font-semibold text-gray-800">ADMIN DASHBOARD</h2>
          </header>
          <div class="p-3">
            <div class="overflow-x-auto">
              <table class="table-auto w-full">
                <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                  <tr>
                    <th class="p-2 whitespace-nowrap font-semibold text-left">
                      FirstName
                    </th>
                    <th class="p-2 whitespace-nowrap font-semibold text-left">
                      LastName
                    </th>
                    <th class="p-2 whitespace-nowrap font-semibold text-left">
                      Contact no.
                    </th>
                    <th class="p-2 whitespace-nowrap font-semibold text-left">
                      Age
                    </th>
                    <th class="p-2 whitespace-nowrap font-semibold text-left">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody class="text-sm divide-y divide-gray-100">
                  <tr>
                    <td class="p-2 whitespace-nowrap flex items-center w-10 h-10 flex-shrink-0 mr-2 sm:mr-3 font-medium text-gray-800">
                      ABHI
                    </td>
                    <td class="p-2 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                          <div class="font-medium text-gray-800">Gaur</div>
                        </div>
                      </div>
                    </td>
                    <td class="p-2 whitespace-nowrap text-left font-medium text-green-500">
                      913131668
                    </td>
                    <td class="p-2 whitespace-nowrap text-lg text-center">
                      22
                    </td>
                    <td class="p-2 whitespace-nowrap">
                      <button
                        onClick={AddUser}
                        class="bg-blue-400 text-gray-50  rounded-md px-3 "
                      >
                        ADD
                      </button>

                      <button class="bg-yellow-400 text-gray-50  rounded-md px-3 ">
                        Update
                      </button>

                      <button class="bg-red-400 text-gray-50 rounded-md px-3">
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
