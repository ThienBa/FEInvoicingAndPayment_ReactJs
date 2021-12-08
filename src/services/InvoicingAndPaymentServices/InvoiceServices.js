import { BaseServices } from "../baseServices";

class InvoiceService extends BaseServices {
    constructor() {
        super();
    }

    getInvoiceItemByUserIdApi = (user_id) => {
        return this.get(`/invoices/${user_id}`);
    }

    addInvoiceItemApi = (newInvoiceItem) => {
        return this.post(`/invoices`, newInvoiceItem);
    }
}

export const invoiceService = new InvoiceService();