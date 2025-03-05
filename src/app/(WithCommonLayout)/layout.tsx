import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
// import Navbar from "@/components/shared/Navbar";



const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar></Navbar>
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default CommonLayout;