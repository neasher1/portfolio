import { send } from 'emailjs-com';
import React from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleContact = (data, event) => {
        event.target.reset();
        const userInfo = {
            first_name: data.first_name,
            last_name: data.last_name,
            message: data.message,
            reply_to: data.reply_to
        }
        send(
            process.env.REACT_APP_serviceIdEmailJs,
            process.env.REACT_APP_templateIdEmailJs,
            userInfo,
            process.env.REACT_APP_privateKeyEmailJs,
        )
            .then(res => {
                console.log("Success", res.status, res.text);
            })
            .catch(error => console.log(error))
    }

    return (
        <div id='contact' className="max-w-[992px] mx-auto my-12">
            <div className='mb-8'>
                <h2 className="text-3xl font-bold mb-2">Contact</h2>
                <hr className='w-40' />
            </div>
            <form onSubmit={handleSubmit(handleContact)} className="card shadow-xl p-8 mx-6">
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">First Name</span>
                        </label>
                        <input
                            {...register("first_name", {
                                required: "Please provided your First Name",
                            })}
                            type="text" className="input input-bordered w-full max-w-xs" />
                        {errors.first_name && <span className='text-error'>{errors.first_name.message}</span>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Last Name</span>
                        </label>
                        <input
                            {...register("last_name")}
                            type="text" className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            {...register("reply_to", {
                                required: "email address is required"
                            })}
                            type="email" className="input input-bordered w-full max-w-xs" />
                        {errors.reply_to && <span className='text-error'>{errors.reply_to.message}</span>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Your Message</span>
                        </label>
                        <textarea
                            {...register("message", {
                                required: "message is required"
                            })}
                            type="text" className="textarea textarea-bordered w-full max-w-xs" placeholder="message"></textarea>
                        {errors.message && <span className='text-error'>{errors.message.message}</span>}
                    </div>
                </div>

                <div className='mx-auto mt-2'>
                    <input className='btn btn-accent w-48 text-white my-4' type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
};

export default Contact;