const Invoice = require("../models/Invoice");

// 🟢 CREATE INVOICE
exports.createInvoice = async (req, res) => {
  try {
    const { amount, description } = req.body;
    const userId = req.user.id; // From Auth Middleware

    const invoice = await Invoice.create({
      userId,
      amount,
      description
    });

    res.json({ msg: "Invoice Created", invoice });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 🔵 GET ALL INVOICES (FILTERED BY USER)
exports.getInvoices = async (req, res) => {
  try {
    const userId = req.user.id;
    const invoices = await Invoice.find({ userId });
    res.json(invoices);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};