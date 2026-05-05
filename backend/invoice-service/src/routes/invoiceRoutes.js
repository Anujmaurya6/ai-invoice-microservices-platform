const router = require("express").Router();
const {
    createInvoice,
    getInvoices
} = require("../controllers/invoiceController");
const auth = require("../middleware/auth");

router.post("/create", auth, createInvoice);
router.get("/", auth, getInvoices);

module.exports = router;