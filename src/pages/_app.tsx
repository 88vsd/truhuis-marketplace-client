import "../styles/globals.css";
import MainLayout from "../components/MainLayout";
import { MoralisProvider } from "react-moralis";
import Head from "next/head";
import Header from "../components/Header";
import { NotificationProvider } from "web3uikit";
import { AppProps } from "next/app";

const APP_ID = process.env.NEXT_PUBLIC_MORALIS_APP_ID;
const SERVER_URL = process.env.NEXT_PUBLIC_MORALIS_SERVER_URL;

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div>
            <Head>
                <title>Truhuis Marketplace</title>
                <meta
                    name="description"
                    content="Buy and sell your Truhuis NFT Real Estate"
                />
                <link rel="icon" href="/truhuis_marketplace_logo_square.ico" />
            </Head>

            <MainLayout>
                <MoralisProvider appId={APP_ID!} serverUrl={SERVER_URL!}>
                    <NotificationProvider>
                        <Header />
                        <Component {...pageProps} />
                    </NotificationProvider>
                </MoralisProvider>
            </MainLayout>
        </div>
    );
}

export default MyApp;
