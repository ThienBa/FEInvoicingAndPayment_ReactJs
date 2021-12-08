import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendMailActions } from '../redux/actions/SendMailActions';

export default function Invoice() {
    const { userDetail } = useSelector(state => state.UserReducers);
    const { invoiceListItem } = useSelector(state => state.InvoiceReducers);
    const dispatch = useDispatch();

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

    const TemplateEmail = `<!doctype html>
        <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
            xmlns:o="urn:schemas-microsoft-com:office:office">
        <head>
            <title>
            </title>
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <style type="text/css">
                #outlook a {
                    padding: 0;
                }

                .ReadMsgBody {
                    width: 100%;
                }

                .ExternalClass {
                    width: 100%;
                }

                .ExternalClass * {
                    line-height: 100%;
                }

                body {
                    margin: 0;
                    padding: 0;
                    -webkit-text-size-adjust: 100%;
                    -ms-text-size-adjust: 100%;
                }

                table,
                td {
                    border-collapse: collapse;
                    mso-table-lspace: 0pt;
                    mso-table-rspace: 0pt;
                }

                img {
                    border: 0;
                    height: auto;
                    line-height: 100%;
                    outline: none;
                    text-decoration: none;
                    -ms-interpolation-mode: bicubic;
                }

                p {
                    display: block;
                    margin: 13px 0;
                }

                @media only screen and (max-width:480px) {
                    @-ms-viewport {
                        width: 320px;
                    }

                    @viewport {
                        width: 320px;
                    }
                }

                @media only screen and (min-width:480px) {
                    .mj-column-per-100 {
                        width: 100% !important;
                    }
                }
            </style>
        </head>
        <body style="background-color:#f9f9f9;">
            <div style="background-color:#f9f9f9;">
                <div style="background:#f9f9f9;background-color:#f9f9f9;Margin:0px auto;max-width:600px;">
                    <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
                        style="background:#f9f9f9;background-color:#f9f9f9;width:100%;">
                        <tbody>
                            <tr>
                                <td
                                    style="border-bottom:#333957 solid 5px;direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;">
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div style="background:#fff;background-color:#fff;Margin:0px auto;max-width:600px;">
                    <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
                        style="background:#fff;background-color:#fff;width:100%;">
                        <tbody>
                            <tr>
                                <td
                                    style="border:#dddddd solid 1px;border-top:0px;direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;">
                                    <div class="mj-column-per-100 outlook-group-fix"
                                        style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:bottom;width:100%;">

                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                                            style="vertical-align:bottom;" width="100%">
                                            <tr>
                                                <td align="center"
                                                    style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                                    <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                        role="presentation"
                                                        style="border-collapse:collapse;border-spacing:0px;">
                                                        <tbody>
                                                            <tr>
                                                                <td style="width:64px;">
                                                                    <img height="auto" src="https://i.imgur.com/KO1vcE9.png"
                                                                        style="border:0;display:block;outline:none;text-decoration:none;width:100%;"
                                                                        width="64" />
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="center"
                                                    style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                                    <div
                                                        style="font-family:'Helvetica Neue',Arial,sans-serif;font-size:24px;font-weight:bold;line-height:22px;text-align:center;color:#525252;">
                                                        Thank you for your order
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">

                                                    <div
                                                        style="font-family:'Helvetica Neue',Arial,sans-serif;font-size:14px;line-height:22px;text-align:left;color:#525252;">
                                                        <p>Hi ${userDetail.fullname},</p>

                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                                                            volutpat ut est ac dignissim. Donec pulvinar ligula metus, sed
                                                            imperdiet quam pretium at. Cras finibus hendrerit magna nec euismod.
                                                            Ut eget
                                                            justo vel enim ultrices pharetra. Morbi tellus libero, sollicitudin
                                                            pulvinar porta ac, auctor sed neque.</p>
                                                    </div>

                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">

                                                    <table border="0"
                                                        style="cellspacing:0;color:#000;font-family:'Helvetica Neue',Arial,sans-serif;font-size:13px;line-height:22px;table-layout:auto;width:100%;">
                                                        <tr style="border-bottom:1px solid #ecedee;text-align:left;">
                                                            <th style="padding: 0 15px 10px 0;">Item</th>
                                                            <th style="padding: 0 15px;">Rate</th>
                                                            <th style="padding: 0 0 0 15px;" align="right">Hours</th>
                                                        </tr>
                                                        ${invoiceListItem.map((item, index) => {
                                                            return <tr key={index} >
                                                                <td style="padding: 5px 15px 5px 0;">{item.itemName}</td>
                                                                <td style="padding: 0 15px;">{item.rate}</td>
                                                                <td style="padding: 0 0 0 15px;" align="right">{item.hours}</td>
                                                            </tr>
                                                        })}
                                                    </table>

                                                </td>
                                            </tr>

                                            <tr>
                                                <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">

                                                    <div
                                                        style="font-family:'Helvetica Neue',Arial,sans-serif;font-size:12px;line-height:16px;text-align:left;color:#a2a2a2;">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                                                            volutpat ut est ac dignissim. Donec pulvinar ligula metus, sed
                                                            imperdiet quam pretium at.</p>
                                                    </div>

                                                </td>
                                            </tr>

                                            <tr>
                                                <td align="center"
                                                    style="font-size:0px;padding:10px 25px;word-break:break-word;">

                                                    <div
                                                        style="font-family:'Helvetica Neue',Arial,sans-serif;font-size:24px;font-weight:bold;line-height:22px;text-align:center;color:#525252;">
                                                        Let us know your experience
                                                    </div>

                                                </td>
                                            </tr>

                                            <tr>
                                                <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">

                                                    <div
                                                        style="font-family:'Helvetica Neue',Arial,sans-serif;font-size:14px;line-height:22px;text-align:left;color:#525252;">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                                                            volutpat ut est ac dignissim. Donec pulvinar ligula metus, sed
                                                            imperdiet quam pretium at. Cras finibus hendrerit magna nec euismod.
                                                            Ut eget
                                                            justo vel enim ultrices pharetra. Morbi tellus libero, sollicitudin
                                                            pulvinar porta ac, auctor sed neque. </p>
                                                    </div>

                                                </td>
                                            </tr>

                                            <tr>
                                                <td align="center"
                                                    style="font-size:0px;padding:10px 25px;padding-top:30px;padding-bottom:50px;word-break:break-word;">

                                                    <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                        role="presentation" style="border-collapse:separate;line-height:100%;">
                                                        <tr>
                                                            <td align="center" bgcolor="#2F67F6" role="presentation"
                                                                style="border:none;border-radius:3px;color:#ffffff;cursor:auto;padding:15px 25px;"
                                                                valign="middle">
                                                                <p
                                                                    style="background:#2F67F6;color:#ffffff;font-family:'Helvetica Neue',Arial,sans-serif;font-size:15px;font-weight:normal;line-height:120%;Margin:0;text-decoration:none;text-transform:none;">
                                                                    <a href="https://www.htmlemailtemplates.net"
                                                                        style="color:#fff; text-decoration:none">
                                                                        Check Shipping Status</a>
                                                                </p>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                                    <div
                                                        style="font-family:'Helvetica Neue',Arial,sans-serif;font-size:14px;line-height:20px;text-align:left;color:#525252;">
                                                        Best regards,<br><br> HTB, CEO and Founder<br>
                                                        <a href="https://www.website.com"
                                                            style="color:#2F67F6">website.com</a>
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                    <!--[if mso | IE]>
                    </td>
                
                </tr>
            
                        </table>
                        <![endif]-->
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div style="Margin:0px auto;max-width:600px;">

                    <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                        <tbody>
                            <tr>
                                <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;">
                                    <div class="mj-column-per-100 outlook-group-fix"
                                        style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:bottom;width:100%;">
                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                            <tbody>
                                                <tr>
                                                    <td style="vertical-align:bottom;padding:0;">
                                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                                                            width="100%">

                                                            <tr>
                                                                <td align="center"
                                                                    style="font-size:0px;padding:0;word-break:break-word;">

                                                                    <div
                                                                        style="font-family:'Helvetica Neue',Arial,sans-serif;font-size:12px;font-weight:300;line-height:1;text-align:center;color:#575757;">
                                                                        District 7, HCM City, VN.
                                                                    </div>

                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </body>
        </html>`;

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
                                <div className="mb-3 space-y-2 w-full text-md">
                                    <div className="mb-3 space-y-2 w-full text-md text-center">
                                        <button className="w-full bg-green-500 text-white py-3 rounded-md hover:shadow-lg hover:bg-green-600 font-bold" onClick={() => {
                                            dispatch(sendMailActions(userDetail.email, "Send invoice", TemplateEmail))
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
