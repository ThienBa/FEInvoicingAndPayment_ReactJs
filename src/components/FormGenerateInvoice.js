import React from 'react';
import { Select } from 'antd';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { displayPopupAction } from '../redux/actions/PopupActions';
const { Option, OptGroup } = Select;


export default function FormGenerateInvoice() {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            itemName: '',
            rate: '',
            hours: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    }

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-gray-500 bg-no-repeat bg-cover relative items-center h-sreen" style={{ backgroundImage: 'url(https://static.vecteezy.com/system/resources/previews/001/879/521/non_2x/shop-more-and-more-fun-online-with-a-variety-of-payment-options-from-cash-credit-cards-transfers-illustration-concept-for-landing-page-web-ui-banner-flyer-poster-template-background-free-vector.jpg)' }}>
            <div className="absolute bg-black opacity-60 inset-0 z-0" />
            <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-lg z-10">
                <div className="grid  gap-8 grid-cols-1">
                    <div className="flex flex-col ">
                        <div className="flex flex-col sm:flex-row items-center">
                            <h2 className="font-semibold text-lg mr-auto">Generate invoice</h2>
                            <div className="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0" />
                        </div>
                        <div className="mt-5">
                            <form onSubmit={formik.handleSubmit} className="form">
                                <div className="mb-3 space-y-2 w-full text-md">
                                    <label className="font-semibold text-gray-600 py-2">Client</label>
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 mr-4 flex-none rounded-xl border overflow-hidden">
                                            <img className="w-12 h-12 mr-4 object-cover" src="https://images.unsplash.com/photo-1611867967135-0faab97d1530?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" alt="Avatar Upload" />
                                        </div>
                                        <Select defaultValue="lucy" bordered={false} className="w-full" onChange={handleChange}>
                                            <OptGroup label="Client">
                                                <Option value="jack">Jack</Option>
                                                <Option value="lucy">Lucy</Option>
                                            </OptGroup>
                                        </Select>
                                    </div>
                                </div>
                                <div className="mb-3 space-y-2 w-full text-md">
                                    <table className="table-fixed text-left">
                                        <thead>
                                            <tr>
                                                <th className="text-gray-600 font-semibold">Item</th>
                                                <th className="text-gray-600 font-semibold">Rate</th>
                                                <th className="text-gray-600 font-semibold">Hours</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <input type="text" className="fleading-normal w-full border-b h-10 border-grey-light px-3 rounded-sm relative focus:border-blue hover:shadow-lg" name="itemName" onChange={formik.handleChange} />
                                                </td>
                                                <td>
                                                    <input type="text" className="fleading-normal w-full border-b h-10 border-grey-light px-3 rounded-sm relative focus:border-blue hover:shadow-lg" name="rate" onChange={formik.handleChange} />
                                                </td>
                                                <td>
                                                    <input type="text" className="fleading-normal w-full border-b h-10 border-grey-light px-3 rounded-sm relative focus:border-blue hover:shadow-lg" name="hours" onChange={formik.handleChange} />
                                                </td>
                                            </tr>
                                            <tr className="text-right">
                                                <td onClick={() => { dispatch(displayPopupAction()) }} className="py-3 cursor-pointer text-blue-400 hover:text-blue-500" colSpan={3}>Add item</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="mb-3 space-y-2 w-full text-md flex justify-between">
                                        <label className=" font-semibold text-gray-600 py-2">Total</label>
                                        <p className="font-bold">99.999vnd</p>
                                    </div>
                                    <div className="mb-3 space-y-2 w-full text-md text-center">
                                        <button className="w-full bg-green-500 text-white py-3 rounded-md hover:shadow-lg hover:bg-green-600 font-bold" type="submit">Done</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
