import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { jsPDF } from 'jspdf';
import * as htmlToImage from 'html-to-image';

export default function Invoice() {
    const { userDetail } = useSelector(state => state.UserReducers);
    const { invoiceListItem } = useSelector(state => state.InvoiceReducers);
    const [displayButton, setDisplayButton] = useState(false)
    const [state, setState] = useState({
        email: {
            recipient: userDetail.email,
            sender: 'thienq421@gmail.com',
            subject: 'Hello word!',
            text: 'Hello word!'
        }
    })

    const renderListItem = () => {
        return invoiceListItem.map((item, index) => {
            return <tr className="hover:bg-gray-100  border-gray-200" key={index}>
                <td className="px-4 py-4">{item.itemName}</td>
                <td className="px-4 py-4">${item.rate}</td>
                <td className="px-4 py-4">{item.hours}</td>
            </tr>
        })
    }

    const handleTotal = () => {
        return invoiceListItem.reduce((total, item) => {
            total += item.rate * item.hours;
            return total;
        }, 0);
    }

    const generatePDF = () => {
        htmlToImage.toPng(document.getElementById('wrapper-invoice'), { quality: 0.95 })
            .then(function (dataUrl) {
                let link = document.createElement('a');
                link.download = 'my-image-name.jpeg';
                const pdf = new jsPDF();
                const imgProps = pdf.getImageProperties(dataUrl);
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
                pdf.addImage(dataUrl, 'PNG', 0, 0);
                pdf.save("invoice.pdf");
            });
    }

    const sendEmail = _ => {
        const { email } = state;
        fetch(`http://127.0.0.1:4000/send-email?recipient=${email.recipient}&sender=${email.sender}&topic=${email.subject}&text=${email.text}`)
            .catch(err => console.error(err))
    }

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-gray-500 bg-no-repeat bg-cover relative items-center h-sreen" style={{ backgroundImage: 'url(https://static.vecteezy.com/system/resources/previews/001/879/521/non_2x/shop-more-and-more-fun-online-with-a-variety-of-payment-options-from-cash-credit-cards-transfers-illustration-concept-for-landing-page-web-ui-banner-flyer-poster-template-background-free-vector.jpg)' }}>
            <div className="absolute bg-black opacity-60 inset-0 z-0" />
            <div id="wrapper-invoice" className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-lg z-10" >
                <div className="grid gap-8 grid-cols-1">
                    <div className="flex flex-col">
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
                                            <img className="w-12 h-12 mr-4 object-cover rounded-xl" src={userDetail.avatar} alt="Avatar" />
                                            <p className="inline-block">{userDetail.fullname}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-7 space-y-2 w-full text-md">
                                    <div className="flex justify-between items-center">
                                        <div className="font-semibold text-gray-600">Email</div>
                                        <div className="overflow-hidden flex items-center">
                                            {userDetail.email}
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-10 space-y-2 w-full text-md">
                                    <div className="flex justify-between items-center">
                                        <div className="font-semibold text-gray-600">Phone number</div>
                                        <div className="overflow-hidden flex items-center">
                                            {userDetail.phoneNumber}
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
                                            {renderListItem()}
                                        </tbody>
                                        <tfoot className="text-sm font-normal text-gray-700">
                                            <tr className="text-right">
                                                <td colSpan={3}>
                                                    Total
                                                    <span className="font-bold px-10">
                                                        ${handleTotal()}.00
                                                    </span>
                                                </td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                                <div className={`mb-3 space-y-2 w-full text-md ${displayButton ? "hidden" : ""}`}>
                                    <div className="mb-3 space-y-2 w-full text-md text-center">
                                        <button className="w-full bg-green-500 text-white py-3 rounded-md hover:shadow-lg hover:bg-green-600 font-bold" onClick={() => {
                                            setDisplayButton(true);
                                            generatePDF();
                                            sendEmail();
                                        }}>Send invoice</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
