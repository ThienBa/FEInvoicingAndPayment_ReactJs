import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hidePopupAction } from '../../redux/actions/PopupActions';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { addInvoiceItemAction } from '../../redux/actions/InvoiceActions';

export default function AddItemPopup() {
    const { displayPopup, user_id } = useSelector(state => state.PopupReducers);
    const dispatch = useDispatch();

    const validationSchema = Yup.object().shape({
        itemName: Yup.string()
            .required('Item name is required'),
        rate: Yup.number()
            .required('Rate is required'),
        hours: Yup.number()
            .required('Hours is required'),
    });

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            user_id,
            itemName: '',
            rate: '',
            hours: '',
        },
        validationSchema,
        onSubmit: values => {
            dispatch(addInvoiceItemAction(values));
        },
    });

    if (displayPopup) {
        return (
            <div className="fixed z-50 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" />
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">​</span>
                    <form onSubmit={formik.handleSubmit} className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                                        Add new item
                                    </h3>
                                    <div className="mt-2">
                                        <input placeholder="Item name" className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" name="itemName" onChange={formik.handleChange} />
                                        <span className='text-red-500 font-thin italic text-xs'>{formik.touched.itemName && Boolean(formik.errors.itemName) ? formik.errors.itemName : null}</span>
                                        <div className="flex">
                                            <div className="flex-grow w-2/4 pr-2">
                                                <input type="number" placeholder="Rate" className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" name="rate" onChange={formik.handleChange} />
                                                <span className='text-red-500 font-thin italic text-xs'>{formik.touched.rate && Boolean(formik.errors.rate) ? formik.errors.rate : null}</span>
                                            </div>
                                            <div className="flex-grow">
                                                <input type="number" placeholder="Hours" className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" name="hours" onChange={formik.handleChange} />
                                                <span className='text-red-500 font-thin italic text-xs'>{formik.touched.hours && Boolean(formik.errors.hours) ? formik.errors.hours : null}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                            <button type="submit" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm">
                                Add
                            </button>
                            <button className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={() => { dispatch(hidePopupAction()) }}>
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    } else {
        return "";
    }
}
