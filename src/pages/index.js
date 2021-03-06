import Head from "next/head";
import HomeLayout from "../components/HomeLayout/HomeLayout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Buy Some Books</title>
      </Head>
      <HomeLayout />
    </div>
  );
}
