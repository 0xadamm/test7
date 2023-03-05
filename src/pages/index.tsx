import Head from "next/head";
import { Inter } from "@next/font/google";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import NewNav from "@/components/NewNav";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Test 7</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="apple-mobile-web-app-capable" content="yes"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <ProductCard />
    </>
  );
}
