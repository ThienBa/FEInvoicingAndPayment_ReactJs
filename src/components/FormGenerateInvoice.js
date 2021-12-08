import React, { useEffect } from 'react';
import { Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { displayPopupAction, setUserIdAction } from '../redux/actions/PopupActions';
import { getAllUserAction, getDetailUserAction } from '../redux/actions/UserActions';
import { getInvoiceItemByUserIdAction, setDisplayTableItemAction } from '../redux/actions/InvoiceActions';
import { SweetAlertError } from '../utils/SweetAlert/SweetAlert';
import { Link } from 'react-router-dom';
const { Option, OptGroup } = Select;


export default function FormGenerateInvoice(props) {
    const dispatch = useDispatch();
    const { userList, userDetail, newUser } = useSelector(state => state.UserReducers);
    const { invoiceListItem, displayTableItem } = useSelector(state => state.InvoiceReducers);

    useEffect(() => {
        dispatch(getAllUserAction());
        dispatch(getDetailUserAction(newUser.id));
        dispatch(getInvoiceItemByUserIdAction(newUser.id));
    }, [])

    const handleChange = (value) => {
        dispatch(setDisplayTableItemAction());
        dispatch(getDetailUserAction(value));
        dispatch(getInvoiceItemByUserIdAction(value));
    }

    const renderUserSelect = () => {
        return userList.map((item, index) => {
            return <Option value={item.id} key={index}>{item.fullname}</Option>
        })
    }

    const renderInvoiceListItem = () => {
        return invoiceListItem.map((item, index) => {
            return <tr key={index}>
                <td>
                    <div className="fleading-normal w-full border-b h-10 border-grey-light px-3 rounded-sm relative focus:border-blue hover:shadow-lg">{item.itemName}</div>
                </td>
                <td>
                    <div className="fleading-normal w-full border-b h-10 border-grey-light px-3 rounded-sm relative focus:border-blue hover:shadow-lg">${item.rate}</div>
                </td>
                <td>
                    <div className="fleading-normal w-full border-b h-10 border-grey-light px-3 rounded-sm relative focus:border-blue hover:shadow-lg">{item.hours}</div>
                </td>
            </tr>
        })
    }

    const handleTotal = () => {
        return invoiceListItem.reduce((total, item) => {
            total += item.rate * item.hours;
            return total;
        }, 0);
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
                            <div className="form">
                                <div className="mb-3 space-y-2 w-full text-md">
                                    <label className="font-semibold text-gray-600 py-2">Client</label>
                                    <div className="flex items-center">
                                        {displayTableItem ?
                                            <div className="w-12 h-12 mr-4 flex-none rounded-xl border overflow-hidden">
                                                <img className="w-12 h-12 mr-4 object-cover" src={userDetail.avatar} alt="Avatar" />
                                            </div>
                                            : ""}
                                        <Select defaultValue={displayTableItem ? newUser.id : "Choose user"} bordered={false} className="w-full" onChange={handleChange}>
                                            <OptGroup label="Client">
                                                {renderUserSelect()}
                                            </OptGroup>
                                        </Select>
                                    </div>
                                </div>
                                <div className={`mb-3 space-y-2 w-full text-md ${displayTableItem ? "" : "hidden"}`}>
                                    <table className="table-fixed text-center w-full" >
                                        <thead>
                                            <tr className="mb-3">
                                                <th className="text-gray-600 font-semibold">Item</th>
                                                <th className="text-gray-600 font-semibold">Rate</th>
                                                <th className="text-gray-600 font-semibold">Hours</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {renderInvoiceListItem()}
                                            <tr className="text-right">
                                                <td className="py-3 text-blue-400 hover:text-blue-500" colSpan={3}><button onClick={() => {
                                                    dispatch(displayPopupAction());
                                                    dispatch(setUserIdAction(userDetail.id));
                                                }}>Add item</button></td>
                                            </tr>
                                        </tbody>
                                    </table >
                                    <div className="mb-3 space-y-2 w-full text-md flex justify-between">
                                        <label className=" font-semibold text-gray-600 py-2">Total</label>
                                        <p className="font-bold">US${handleTotal().toLocaleString()}.00</p>
                                    </div>
                                    <div className="mb-3 space-y-2 w-full text-md text-center">
                                        <button className="w-full bg-green-500 text-white py-3 rounded-md hover:shadow-lg hover:bg-green-600 font-bold" onClick={() => {
                                            if (invoiceListItem.length > 0) {
                                                props.history.push("/invoice");
                                            } else {
                                                SweetAlertError("Client has no items to invoice")
                                            }
                                        }}>Done</button>
                                    </div>
                                </div>
                                <Link to="/" className="flex items-center"><ion-icon name="arrow-undo-outline"></ion-icon>Go back add client</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
