import Link from "next/link";
import { useMoralis } from "react-moralis";
import { useEffect } from "react";

export default function Header() {
    const { enableWeb3, isWeb3Enabled, account, Moralis, deactivateWeb3, isWeb3EnableLoading } =
        useMoralis();

    useEffect(() => {
        if (isWeb3Enabled) return;
        if (typeof window !== undefined) {
            if (window.localStorage.getItem("connected")) {
                enableWeb3();
            }
        }
    }, [isWeb3Enabled]);

    // Checks whether the wallet is connected
    useEffect(() => {
        Moralis.onAccountChanged((account) => {
            console.log(`Account changed to ${account}`);
            if (account == null) {
                window.localStorage.removeItem("connected");
                deactivateWeb3(); // Will set isWeb3Enabled to false
                console.log("Null account found");
            }
        });
    }, []);

    return (
        <div className="mb-5">
            <nav className="relative mx-auto">
                <div className="flex flex-row items-center justify-between">
                    {/* Links */}
                    <div className="hidden flex-row md:flex">
                        {/* Truhuis Logo */}
                        <div className="pr-9 basis-1/5 w-full">
                            <Link href="/">
                                <img src="/truhuis_logo.png" />
                            </Link>
                        </div>

                        <div className="w-full flex flex-row border-2 border-truhuisGrey xl:text-2xl divide-x-2  2xl:rounded-3xl xl:rounded-2xl md:rounded-xl lg:rounded-2xl divide-truhuisGrey bg-truhuisWhite text-truhuisGrey 2xl:text-3xl">
                            <button className="basis-1/5 rounded-l-2xl px-10 baseline 2xl:rounded-l-3xl xl:rounded-l-2xl md:rounded-l-xl lg:rounded-l-2xl ">
                                <Link href="/verify">VERIFY</Link>
                            </button>

                            <button className="basis-1/5 px-10 baseline">
                                <Link href="/offer">OFFER</Link>
                            </button>

                            <button className="basis-1/5 px-10 baseline">
                                <Link href="/list">LIST</Link>
                            </button>

                            <button className="basis-1/5 px-10 baseline">
                                <Link href="/auction">AUCTION</Link>
                            </button>

                            {/* CONNECT BUTTON */}
                            {account ? (
                                <button className="px-10 uppercase basis-1/5 2xl:rounded-r-3xl xl:rounded-r-2xl md:rounded-r-xl lg:rounded-r-2xl baseline">
                                    <Link href="/account">Account</Link>
                                </button>
                            ) : (
                                <button
                                    className="px-10 basis-1/5 border-none bg-truhuisBlue ring-2 ring-truhuisBlue 2xl:rounded-r-3xl xl:rounded-r-2xl md:rounded-r-xl lg:rounded-r-2xl baseline"
                                    onClick={async () => {
                                        await enableWeb3();
                                        if (typeof window !== "undefined") {
                                            window.localStorage.setItem("connected", "injected");
                                        }
                                    }}
                                    disabled={isWeb3EnableLoading}
                                >
                                    CONNECT
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
            <div className="border border-truhuisGrey rounded-full mt-5 relative mx-auto" />
        </div>
    );
}
