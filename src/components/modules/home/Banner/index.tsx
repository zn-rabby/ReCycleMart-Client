import Head from "next/head";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function HomeBanner() {
  return (
    <>
      <Head>
        <title>আমার ই-কমার্স পেজ</title>
        <meta
          name="description"
          content="Tailwind CSS, Next.js, TypeScript এবং Shadcn UI ব্যবহার করে তৈরি"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-gray-100 p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* প্রথম কার্ড */}
          <Card className="col-span-1 md:col-span-2 relative">
            <Image
              src="/path/to/your/image1.jpg" // আপনার ছবির পাথ দিন
              alt="বিশেষ অফার"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute top-4 left-4 bg-yellow-500 text-white p-2 rounded">
              সুপার ডিল!
            </div>
            <div className="absolute bottom-4 left-4 text-white">
              <h2 className="text-2xl font-bold">বিশেষ অফার</h2>
              <p className="text-4xl font-extrabold">সেল আপটু ৭০% অফ</p>
            </div>
          </Card>

          {/* দ্বিতীয় কার্ড */}
          <Card className="col-span-1">
            <CardContent className="flex flex-col items-center justify-center">
              <h2 className="text-xl font-semibold">সমুদ্র যাত্রা</h2>
              <p className="text-2xl font-bold">$২৪৬,০০</p>
              <Button className="mt-4">এখনই কিনুন</Button>
            </CardContent>
          </Card>

          {/* তৃতীয় কার্ড */}
          <Card className="col-span-1">
            <CardContent className="flex flex-col items-center justify-center">
              <h2 className="text-xl font-semibold">শুভ বড়দিন সেল</h2>
              <p className="text-2xl font-bold">$৪০০,০০</p>
            </CardContent>
          </Card>

          {/* চতুর্থ কার্ড */}
          <Card className="col-span-1">
            <CardContent className="flex flex-col items-center justify-center">
              <h2 className="text-xl font-semibold">বিচ ওয়্যার</h2>
              <p className="text-2xl font-bold">শুরু $৩৯৯.০০ থেকে</p>
            </CardContent>
          </Card>

          {/* পঞ্চম কার্ড */}
          <Card className="col-span-1">
            <CardContent className="flex flex-col items-center justify-center">
              <h2 className="text-xl font-semibold">এই শুক্রবার সেল</h2>
              <p className="text-2xl font-bold">শুরু $৩৯৯.০০ থেকে</p>
            </CardContent>
          </Card>

          {/* ষষ্ঠ কার্ড */}
          <Card className="col-span-1">
            <CardContent className="flex flex-col items-center justify-center">
              <h2 className="text-xl font-semibold">এই শুক্রবার সেল</h2>
              <p className="text-2xl font-bold">৫০% অফ</p>
            </CardContent>
          </Card>

          {/* সপ্তম কার্ড */}
          <Card className="col-span-1">
            <CardContent className="flex flex-col items-center justify-center">
              <h2 className="text-xl font-semibold">৭৬% অফ</h2>
              <p className="text-xl">সবকিছুতে!</p>
              <Button className="mt-4">কিনুন</Button>
            </CardContent>
          </Card>
        </div>

        {/* নিচের সেকশন */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-8">
          <div className="flex flex-col items-center">
            <Image
              src="/path/to/free-delivery.png"
              alt="ফ্রি ডেলিভারি"
              width={40}
              height={40}
            />
            <p className="mt-2">ফ্রি ডেলিভারি</p>
            <p className="text-sm">শুরু $৫৯.৮৯ থেকে</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/path/to/support.png"
              alt="২৪/৭ সাপোর্ট"
              width={40}
              height={40}
            />
            <p className="mt-2">২৪/৭ সাপোর্ট</p>
            <p className="text-sm">অনলাইন ২৪ ঘন্টা</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/path/to/free-return.png"
              alt="ফ্রি রিটার্ন"
              width={40}
              height={40}
            />
            <p className="mt-2">ফ্রি রিটার্ন</p>
            <p className="text-sm">৩৬৫ দিন</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/path/to/payment.png"
              alt="নিরাপদ পেমেন্ট"
              width={40}
              height={40}
            />
            <p className="mt-2">পেমেন্ট পদ্ধতি</p>
            <p className="text-sm">নিরাপদ পেমেন্ট</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/path/to/savings.png"
              alt="বিগ সেভিং"
              width={40}
              height={40}
            />
            <p className="mt-2">বিগ সেভিং</p>
            <p className="text-sm">সপ্তাহান্তের সেল</p>
          </div>
        </div>
      </main>
    </>
  );
}
