import Link from "next/link";
const PaymentSuccess = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h1 className="text-4xl font-bold text-green-600">Payment Successful</h1>
          <p className="mt-4 text-lg text-gray-600">Thank you for your purchase!</p>
          <Link href={"/"} className="btn btn-primary mt-6">
            Go to Home
          </Link>
        </div>
      </div>
    );
  };
  
  export default PaymentSuccess;