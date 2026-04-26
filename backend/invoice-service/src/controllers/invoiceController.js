const Invoice = require("../models/Invoice");

// 🟢 CREATE INVOICE
exports.createInvoice = async (req, res) => {
  try {
    const { amount, description } = req.body;

    const invoice = await Invoice.create({
      amount,
      description
    });

    res.json({ msg: "Invoice Created", invoice });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 🔵 GET ALL INVOICES
exports.getInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.find();
    res.json(invoices);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};