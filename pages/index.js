import Head from "next/head";
import { useEffect } from "react";
import Router from "next/router";

export default function Home() {
  useEffect(() => {
    Router.push("/frontend/landing");
  }, []);
  return (
    <>
      <Head>
        <title>E-commerce APP</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
}
