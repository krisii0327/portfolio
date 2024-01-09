"use client"
import React from 'react';
import { Mail, Send } from 'lucide-react';
import { sendEmail } from '@/actions/sendEmail';
import toast from 'react-hot-toast';

const ContactForm = () => {

    const handleEmail = async (formData : FormData) => {
        const sendPromise = new Promise(async (resolve, reject) => {
            await sendEmail(formData);
            resolve(toast);
        })

        await toast.promise(sendPromise, {
            loading: 'Sending message..',
            success: 'Message sent.',
            error: 'Oops, something went wrong.',
        })
    }

  return (
    <div>
        <div className='flex justify-center items-center gap-4 mt-8 mb-4'>
            <Mail size={45} className='text-slate-700'/>
            <div className='flex flex-col'>
                <span className='text-xl font-semibold text-slate-700'>
                    Feel free to write me a letter.
                </span>
                <span className='text-slate-600'>
                    I will answer as soon as possible.
                </span>
            </div>
        </div>
        <div className='mb-2 flex justify-center'>
            <span className='text-slate-600'>
                Please contact me directly at kovesi44@gmail.com or through this form.
            </span>
        </div>
        <form className='flex flex-col' action={(formData) => handleEmail(formData)}>
            <div>
                <label>Name or Company</label>
                <input type="text" name="name" required/>
            </div>
            <div>
                <label>Email</label>
                <input type="email" name="email" required/>
            </div>
            <div>
                <label>Subject</label>
                <input type="text" name="subject" required/>
            </div>
            <div>
                <label>Message</label>
                <textarea name="message" cols={30} rows={5}/>
            </div>
            <button className='btn btn-primary mt-2 mb-4 font-semibold hover:scale-105'>
                Send
                <Send />
            </button>
        </form>
    </div>
  )
}

export default ContactForm