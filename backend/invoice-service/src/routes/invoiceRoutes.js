const router=require("express").Router();
const {
    createInvoice,
    getInvoices
}=require("../controllers/invoiceController");

router.post("/create",createInvoice);
router.get("/",getInvoices);

module.exports=router;