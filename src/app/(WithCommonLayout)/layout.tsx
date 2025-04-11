import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { getCurrentUser } from "@/services/AuthService";
// import Navbar from "@/components/shared/Navbar";

const CommonLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getCurrentUser();
  return (
    <>
      <Navbar user={user}></Navbar>
      <main className="min-h-screen mt-16 md:mt-28">{children}</main>
      <Footer />
    </>
  );
};

export default CommonLayout;

// import Footer from "@/components/shared/Footer";
// import Navbar from "@/components/shared/Navbar";
// import { getCurrentUser } from "@/services/Auth";
// import { ReactNode } from "react";

// export default async function CommonLayout({
//   children,
// }: {
//   children: ReactNode;
// }) {
//   const user = await getCurrentUser();
//   return (
//     <div>
//       <Navbar user={user} />
//       <div className="min-h-screen">{children}</div>
//       <Footer />
//     </div>
//   );
// }
