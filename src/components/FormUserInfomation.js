import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { addUserAction } from '../redux/actions/UserActions';

export default function FormUserInfomation() {
    const dispatch = useDispatch();
    const [avatarSrc, setAvatarSrc] = useState(null);

    const fillInfomationSchema = Yup.object().shape({
        fullname: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Fullname is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        phoneNumber: Yup.string()
            .matches(/(84|0[3|5|7|8|9])+([0-9]{8})+/, 'Invalid phone number')
            .max(10, 'Invalid phone number')
            .required('Phone number is required'),
        avatar: Yup.string()
            .required('Avatar is required'),
    });

    const formik = useFormik({
        initialValues: {
            fullname: '',
            email: '',
            phoneNumber: '',
            avatar: ''
        },
        validationSchema: fillInfomationSchema,
        onSubmit: values => {
            const formData = new FormData();
            for (const key in values) {
                if (key !== 'avatar') {
                    formData.append(key, values[key]);
                } else {
                    formData.append('avatar', values[key], values[key].name);
                }
            }
            dispatch(addUserAction(formData));
        },
    });

    const handleChangeFile = (e) => {
        const file = e.target.files[0];
        if (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/jpg' || file.type === 'image/gif') {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e) => {
                setAvatarSrc(e.target.result);
            }
            formik.setFieldValue('avatar', file);
        }
    }

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-gray-500 bg-no-repeat bg-cover relative items-center h-sreen" style={{ backgroundImage: 'url(https://static.vecteezy.com/system/resources/previews/001/879/521/non_2x/shop-more-and-more-fun-online-with-a-variety-of-payment-options-from-cash-credit-cards-transfers-illustration-concept-for-landing-page-web-ui-banner-flyer-poster-template-background-free-vector.jpg)' }}>
            <div className="absolute bg-black opacity-60 inset-0 z-0" />
            <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-lg z-10">
                <div className="grid  gap-8 grid-cols-1">
                    <div className="flex flex-col ">
                        <div className="flex flex-col sm:flex-row items-center">
                            <h2 className="font-semibold text-lg mr-auto">Client infomation</h2>
                            <div className="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0" />
                        </div>
                        <div className="mt-5">
                            <form onSubmit={formik.handleSubmit} className="form">
                                <div className="mb-3 space-y-2 w-full text-md">
                                    <label className=" font-semibold text-gray-600 py-2">Fullname</label>
                                    <div className="flex flex-wrap items-stretch w-full mb-4 relative">
                                        <input type="text" className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border h-10 border-grey-light rounded-lg px-3 relative focus:border-blue focus:shadow hover:shadow-lg" placeholder="https://..." name="fullname" onChange={formik.handleChange} />
                                    </div>
                                    <span className='text-red-500 font-thin italic text-xs'>{formik.touched.fullname && Boolean(formik.errors.fullname) ? formik.errors.fullname : null}</span>
                                </div>
                                <div className="mb-3 space-y-2 w-full text-md">
                                    <label className=" font-semibold text-gray-600 py-2">Email</label>
                                    <div className="flex flex-wrap items-stretch w-full mb-4 relative">
                                        <input type="text" className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border h-10 border-grey-light rounded-lg px-3 relative focus:border-blue focus:shadow hover:shadow-lg" placeholder="mailadress@gmail.com" name="email" onChange={formik.handleChange} />
                                    </div>
                                    <span className='text-red-500 font-thin italic text-xs'>{formik.touched.email && Boolean(formik.errors.email) ? formik.errors.email : null}</span>
                                </div>
                                <div className="mb-3 space-y-2 w-full text-md">
                                    <label className=" font-semibold text-gray-600 py-2">Phone number</label>
                                    <div className="flex flex-wrap items-stretch w-full mb-4 relative">
                                        <input type="text" className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border h-10 border-grey-light rounded-lg px-3 relative focus:border-blue focus:shadow hover:shadow-lg" placeholder="0987..." name="phoneNumber" onChange={formik.handleChange} />
                                    </div>
                                    <span className='text-red-500 font-thin italic text-xs'>{formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber) ? formik.errors.phoneNumber : null}</span>
                                </div>
                                <div className="mb-7 space-y-2 w-full text-md">
                                    <label className=" font-semibold text-gray-600 py-2">Profile picture</label>
                                    <div className="flex items-center">
                                        {avatarSrc ?
                                            <div className="w-12 h-12 mr-4 flex-none rounded-xl border overflow-hidden">
                                                <img className="w-12 h-12 mr-4 object-cover" src={avatarSrc} alt={avatarSrc} />
                                            </div> : ''}
                                        <label className="cursor-pointer ">
                                            <span className="focus:outline-none text-white text-sm py-2 px-4 rounded-full bg-green-400 hover:bg-green-500 hover:shadow-lg">Browse</span>
                                            <input type="file" className="hidden" accept="image/png, image/jpeg, image/jpg,  image/gif" onChange={handleChangeFile} />
                                            <span className='text-red-500 font-thin italic text-xs ml-3'>{formik.touched.avatar && Boolean(formik.errors.avatar) ? formik.errors.avatar : null}</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="mb-3 space-y-2 w-full text-md text-center">
                                    <button className="w-full bg-green-500 text-white py-3 rounded-md hover:shadow-lg hover:bg-green-600 font-bold" type="submit">Save client</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
