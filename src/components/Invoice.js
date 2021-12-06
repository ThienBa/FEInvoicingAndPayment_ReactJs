import React from 'react'

export default function Invoice() {
    return (
        <div className="relative min-h-screen flex items-center justify-center bg-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-gray-500 bg-no-repeat bg-cover relative items-center h-sreen" style={{ backgroundImage: 'url(https://static.vecteezy.com/system/resources/previews/001/879/521/non_2x/shop-more-and-more-fun-online-with-a-variety-of-payment-options-from-cash-credit-cards-transfers-illustration-concept-for-landing-page-web-ui-banner-flyer-poster-template-background-free-vector.jpg)' }}>
            <div className="absolute bg-black opacity-60 inset-0 z-0" />
            <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-lg z-10">
                <div className="grid  gap-8 grid-cols-1">
                    <div className="flex flex-col ">
                        <div className="flex flex-col sm:flex-row items-center">
                            <h2 className="font-semibold text-lg mr-auto">Invoice</h2>
                            <div className="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0" />
                        </div>
                        <div className="mt-5">
                            <div className="form">
                                <div className="mb-3 space-y-2 w-full text-md">
                                    <div className="flex justify-between items-center">
                                        <p className="font-semibold text-gray-600">Client</p>
                                        <div className="overflow-hidden flex items-center">
                                            <img className="w-12 h-12 mr-4 object-cover rounded-xl" src="https://images.unsplash.com/photo-1611867967135-0faab97d1530?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" alt="Avatar Upload" />
                                            <p className="inline-block">Alex</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-7 space-y-2 w-full text-md">
                                    <div className="flex justify-between items-center">
                                        <div className="font-semibold text-gray-600">Email</div>
                                        <div className="overflow-hidden flex items-center">
                                            Alex@gmail.com
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-10 space-y-2 w-full text-md">
                                    <div className="flex justify-between items-center">
                                        <div className="font-semibold text-gray-600">Phone number</div>
                                        <div className="overflow-hidden flex items-center">
                                            +84.313121221
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-10 space-y-2 w-full text-md">
                                    <table className="table-auto border-collapse w-full">
                                        <thead>
                                            <tr className="rounded-lg text-sm text-left" style={{ fontSize: '0.9674rem' }}>
                                                <th className="px-4 py-2 bg-gray-200 font-medium text-gray-700 text-left" style={{ backgroundColor: '#f8f8f8' }}>Item</th>
                                                <th className="px-4 py-2 font-medium text-gray-700 text-left" style={{ backgroundColor: '#f8f8f8' }}>Rate</th>
                                                <th className="px-4 py-2 font-medium text-gray-700 text-left" style={{ backgroundColor: '#f8f8f8' }}>Hours</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-sm font-normal text-gray-700">
                                            <tr className="hover:bg-gray-100  border-gray-200">
                                                <td className="px-4 py-4">Intro to JavaScript</td>
                                                <td className="px-4 py-4">Chris</td>
                                                <td className="px-4 py-4">1,280</td>
                                            </tr>
                                        </tbody>
                                        <tfoot className="text-sm font-normal text-gray-700">
                                            <tr className="text-right">
                                                <td colspan={3}>
                                                    Total
                                                    <span className="font-bold px-14">
                                                        $21
                                                    </span>
                                                </td>
                                            </tr>
                                        </tfoot>
                                        <tbody className="text-sm font-normal text-gray-700">
                                            <tr className="hover:bg-gray-100  border-gray-200">
                                                <td className="px-4 py-4">Intro to JavaScript</td>
                                                <td className="px-4 py-4">Chris</td>
                                                <td className="px-4 py-4">1,280</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mb-3 space-y-2 w-full text-md">
                                    <div className="mb-3 space-y-2 w-full text-md text-center">
                                        <button className="w-full bg-green-500 text-white py-3 rounded-md hover:shadow-lg hover:bg-green-600 font-bold">Send invoice</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
