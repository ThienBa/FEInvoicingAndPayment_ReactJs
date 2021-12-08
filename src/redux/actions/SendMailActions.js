import { SEND_MAIL_API_SAGA } from "../constants/SendMailConstants";

export const sendMailActions = (recipient, subject, html) => ({
    type: SEND_MAIL_API_SAGA,
    infoMail: {
        recipient,
        subject,
        html
    }
})
