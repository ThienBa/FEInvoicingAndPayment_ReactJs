import { BaseServices } from "../baseServices";

class SendMailService extends BaseServices {
    constructor() {
        super();
    }

    sendMailApi = (infoMail) => {
        return this.post(`/send_mails`, infoMail);
    }
}

export const sendMailService = new SendMailService();