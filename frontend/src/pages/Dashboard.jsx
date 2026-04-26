import InvoiceForm from "../components/InvoiceForm";
import InvoiceList from "../components/InvoiceList";
import API from "../services/api";

export default function Dashboard() {

  // 🔵 AI BUTTON
  const handleAI = async () => {
    try {
      // 1. Check subscription
      const res = await API.get("/subscription/check");

      if (!res.data.isPro) {
        alert("⚠️ You are not a Pro user. Please upgrade!");

        // 2. Create Razorpay order
        const orderRes = await API.post("/payment/create-order");

        openRazorpay(orderRes.data);
        return;
      }

      // 3. Call AI (if Pro)
      const aiRes = await API.post("/ai/generate", {
        prompt: "Generate invoice for ₹5000"
      });

      alert("AI Invoice Generated ✅");
      console.log(aiRes.data);

    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    }
  };

  // 🟢 UPGRADE BUTTON
  const handleUpgrade = async () => {
    try {
      const orderRes = await API.post("/payment/create-order");
      openRazorpay(orderRes.data);
    } catch (err) {
      console.log(err);
    }
  };

  // 💳 Razorpay Open
  const openRazorpay = (order) => {
    const options = {
      key: "YOUR_RAZORPAY_KEY", // 🔥 Replace with real key
      amount: order.amount,
      currency: "INR",
      name: "Invoice AI App",
      description: "Upgrade to Pro",
      order_id: order.id,
      handler: function (response) {
        alert("✅ Payment Successful!");

        // Optional: update subscription
        API.post("/subscription/upgrade");
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="p-6">

      <h2 className="text-xl mb-4">Dashboard</h2>

      {/* AI Button */}
      <button
        onClick={handleAI}
        className="bg-purple-500 text-white px-4 py-2 mr-2 rounded"
      >
        Create with AI 🤖
      </button>

      {/* Upgrade Button */}
      <button
        onClick={handleUpgrade}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Upgrade to Pro 💳
      </button>

      {/* Invoice Features */}
      <InvoiceForm />
      <InvoiceList />

    </div>
  );
}