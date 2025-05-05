import LoginForm from "@/components/modules/auth/login/LoginForm";
import Image from "next/image";
import Link from "next/link";
import RLogo from "../../assets/svgs/RLogo.svg";

const LoginPage = () => {
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
                  Log in to continue buying and selling pre-loved items with
                  confidence on the world’s trusted marketplace.
                </p>
              </div>
            </div>

            <div className="relative w-full h-[500px]">
              <Image
                src="https://res.cloudinary.com/daxjf1buu/image/upload/v1746528816/Tablet_login-amico_cbztex.svg"
                fill
                alt="Login Illustration"
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Form Section */}
          <div className="w-full lg:w-[450px] p-8 lg:p-12">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
