import { useState } from "react";

export default function OtpLogin() {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));

  const handleChange = (value: string, index: number) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto focus next input
    if (value && index < 5) {
      document.getElementById(otp-${index + 1})?.focus();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white w-[360px] p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold">OTP Verification</h2>
        <p className="text-sm text-gray-500 mb-6">
          Enter the 6-digit OTP sent to your email
        </p>

        <div className="flex justify-between mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={otp-${index}}
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              maxLength={1}
              className="w-12 h-12 text-center border rounded-lg text-lg focus:outline-blue-600"
            />
          ))}
        </div>

        <button className="w-full bg-blue-600 text-white py-2 rounded font-semibold">
          Verify OTP
        </button>

        <p className="text-sm text-center mt-4 text-gray-600">
          Didn’t receive OTP?{" "}
          <span className="text-blue-600 cursor-pointer">Resend</span>
        </p>
      </div>
    </div>
  );
}
