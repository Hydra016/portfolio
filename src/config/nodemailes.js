import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.NEXT_PUBLIC_USER_EMAIL,
        pass: process.env.NEXT_PUBLIC_USER_PASSWORD
    }
})

export const mailOptions = {
    from: process.env.NEXT_PUBLIC_USER_EMAIL,
    to: process.env.NEXT_PUBLIC_USER_EMAIL
}