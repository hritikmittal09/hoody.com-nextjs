import Link from "next/link";

const PaymentCancel = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h1 className="text-4xl font-bold text-red-600">Payment Canceled</h1>
          <p className="mt-4 text-lg text-gray-600">Your payment was canceled. Please try again.</p>
          <Link href={"/"} className="btn btn-primary mt-6">
            Go to Home
          </Link>
        </div>
      </div>
    );
  };
  
  export default PaymentCancel;