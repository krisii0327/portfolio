"use server"
import { Resend } from "resend";
import { validateString } from "./utils";

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData: FormData) => {
    const name = formData.get('name');
    const senderEmail = formData.get('email');
    const message = formData.get('message');
    const subject = formData.get('subject');

    if (!validateString(senderEmail)) {
        return {
            error: "Invalid message",
        }
    }

    if (!validateString(message)) {
        return {
            error: "Invalid message",
        }
    }

    if (!validateString(subject)) {
        return {
            error: "Invalid message",
        }
    }
    
    await resend.emails.send({
        from: `${name} <onboarding@resend.dev>`,
        to: 'kovesi44@gmail.com',
        subject: subject as string,
        reply_to: senderEmail as string,
        text: message as string,
    })
}