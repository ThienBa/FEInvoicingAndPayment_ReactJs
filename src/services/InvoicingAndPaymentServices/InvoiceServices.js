import { BaseServices } from "../baseServices";

class InvoiceService extends BaseServices {
    constructor() {
        super();
    }

    getInvoiceItemByUserIdApi = (user_id) => {
        return this.get(`/api/v1/invoices/${user_id}`);
    }

    addInvoiceItemApi = (newInvoiceItem) => {
        return this.post(`/api/v1/invoices`, newInvoiceItem);
    }
}

export const invoiceService = new InvoiceService();