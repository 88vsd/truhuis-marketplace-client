export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="bg-truhuisWhite ring-2 lg:m-5 md:m-4 sm:m-3 rounded-3xl h-full pb-5 pt-5 m-auto ring-truhuisBlue">
            <main className="mb-5 mx-9">{children}</main>
        </div>
    );
}
