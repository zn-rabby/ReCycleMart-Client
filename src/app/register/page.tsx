// import RegisterForm from "@/components/modules/auth/register/RegisterForm";

// const RegisterPage = () => {
//   return (
//     <div className="h-screen w-screen flex justify-center items-center">
//       <RegisterForm />
//     </div>
//   );
// };

// export default RegisterPage;

import RegisterForm from "@/components/modules/auth/register/RegisterForm";
import Image from "next/image";
import Link from "next/link";
import RLogo from "../../assets/svgs/RLogo.svg";

const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF7F2] to-[#FFEEE2] flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        {/* Header */}

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Illustration Section */}
          <div className="hidden lg:block flex-1 p-8 bg-[#FFF9F5]">
            <div className="mt-6 text-center lg:text-left">
              <header className="mb-4 flex flex-col items-center lg:flex-row lg:justify-start gap-2">
                <Link href="/" className="flex items-center gap-2">
                  <Image
                    src={RLogo}
                    height={40}
                    width={40}
                    alt="ReCycleMart Logo"
                    className="h-10 w-10"
                  />
                  <h1 className="text-2xl font-bold text-[#FF5E01]">
                    ReCycleMart
                  </h1>
                </Link>
              </header>

              <div className="max-w-md mx-auto lg:mx-0">
                <p className="text-gray-600">
                  Join the world’s most trusted platform for buying and selling
                  second-hand items. It’s quick, easy, and secure!
                </p>
              </div>
            </div>

            <div className="relative w-full h-[550px]">
              <Image
                src="https://res.cloudinary.com/daxjf1buu/image/upload/v1746530850/Mobile_login-pana_njokh5.svg"
                fill
                alt="Login Illustration"
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Form Section */}
          <div className="w-full lg:w-[450px] p-8 lg:p-12">
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
