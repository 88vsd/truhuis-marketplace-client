const municipalities = [
    { id: "amsterdam", name: "Amsterdam", cbsCode: "0363" },
    { id: "rotterdam", name: "Rotterdam", cbsCode: "0599" },
    { id: "the-hague", name: "The Hague", cbsCode: "0518" },
    { id: "utrecht", name: "Utrecht", cbsCode: "0344" },
    { id: "eindhoven", name: "Eindhoven", cbsCode: "0772" },
];

const truhuis = [
    {
        id: "addresser",
        name: "Truhuis Addresser",
        contractIdentifier: "ADDRESSER",
    },
    {
        id: "appraiser",
        name: "Truhuis Appraiser",
        contractIdentifier: "APPRAISER",
    },
    { id: "bank", name: "Truhuis Bank", contractIdentifier: "BANK" },
    {
        id: "cadastre",
        name: "Truhuis Cadastre",
        contractIdentifier: "CADASTRE",
    },
    {
        id: "inspector",
        name: "Truhuis Inspector",
        contractIdentifier: "INSPECTOR",
    },
    { id: "notary", name: "Truhuis Notary", contractIdentifier: "NOTARY" },
    { id: "trade", name: "Truhuis Trade", contractIdentifier: "TRADE" },
];

const personalRecordsDatabase = {
    id: "personal-records-database",
    name: "Personal Records Database",
    contractIdentifier: "PERSONAL RECORDS DATABASE",
};

const priceOracle = {
    id: "price-oracle",
    name: "Chainlink Price Feed",
    contractIdentifier: "PRICE ORACLE",
};

const taxAdministration = {
    id: "tax-administration",
    name: "Tax Administration",
    contractIdentifier: "TAX ADMINISTRATION",
};

export default function Addresser() {
    return (
        <form className="space-y-6 mx-8 my-8" action="#" method="POST">
            {/* MUNICIPALITY REGISTRATION */}
            <div
                id="register-municipality"
                className="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6"
            >
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-1">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">
                            Register Municipality
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                            Register new municipality contract address.
                        </p>
                    </div>
                    <div className="mt-5 md:col-span-2 md:mt-0">
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    htmlFor="municipality"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Municipality
                                </label>
                                <select
                                    id="municipality"
                                    name="municipality"
                                    autoComplete="municipality-name"
                                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                >
                                    {municipalities.map((municipality) => (
                                        <option key={municipality.id}>
                                            {municipality.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="col-span-6">
                                <label
                                    htmlFor="municipality-contract-address"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Municipality contract address
                                </label>
                                <input
                                    type="text"
                                    name="municipality-contract-address"
                                    id="municipality-contract-address"
                                    autoComplete="municipality-contract-address"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>
                        <div className="flex mt-6 justify-end">
                            <button
                                type="submit"
                                className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Register
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* UPDATE MUNICIPALITY CONTRACT ADDRESS */}
            <div
                id="update-municipality"
                className="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6"
            >
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-1">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">
                            Update Municipality
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                            Update municipality contract address by defining
                            municipality and inserting new contract address.
                        </p>
                    </div>
                    <div className="mt-5 md:col-span-2 md:mt-0">
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    htmlFor="municipality-update"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Municipality
                                </label>
                                <select
                                    id="municipality"
                                    name="municipality"
                                    autoComplete="municipality-name"
                                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                >
                                    {municipalities.map((municipality) => (
                                        <option key={municipality.id}>
                                            {municipality.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="col-span-6">
                                <label
                                    htmlFor="municipality-contract-address"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Municipality contract address
                                </label>
                                <input
                                    type="text"
                                    name="municipality-contract-address"
                                    id="municipality-contract-address"
                                    autoComplete="municipality-contract-address"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>
                        <div className="flex mt-6 justify-end">
                            <button
                                type="submit"
                                className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Update
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* UPDATE TRUHUIS CONTRACT ADDRESS */}
            <div
                id="update-truhuis"
                className="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6"
            >
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-1">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">
                            Update Truhuis
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                            Update Truhuis contract address by defining contract
                            name and inserting new contract address.
                        </p>
                    </div>
                    <div className="mt-5 md:col-span-2 md:mt-0">
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    htmlFor="contract-id"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Contract name
                                </label>
                                <select
                                    id="truhuis"
                                    name="truhuis"
                                    autoComplete="truhuis-name"
                                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                >
                                    {truhuis.map((contract) => (
                                        <option key={contract.id}>
                                            {contract.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="col-span-6">
                                <label
                                    htmlFor="truhuis-contract-address"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Truhuis contract address
                                </label>
                                <input
                                    type="text"
                                    name="truhuis-contract-address"
                                    id="truhuis-contract-address"
                                    autoComplete="truhuis-contract-address"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>
                        <div className="flex mt-6 justify-end">
                            <button
                                type="submit"
                                className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Update
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* UPDATE PERSONAL RECORDS DATABASE CONTRACT ADDRESS*/}
            <div
                id="update-personal-records-database"
                className="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6"
            >
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-1">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">
                            Update Personal Records Database
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                            Update Personal Records Database contract address by
                            inserting new contract address.
                        </p>
                    </div>
                    <div className="mt-5 md:col-span-2 md:mt-0">
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6">
                                <label
                                    htmlFor="personal-records-database-contract-address"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Personal Records Database contract address
                                </label>
                                <input
                                    type="text"
                                    name="personal-records-database-contract-address"
                                    id="personal-records-database-contract-address"
                                    autoComplete="personal-records-database-contract-address"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>
                        <div className="flex mt-6 justify-end">
                            <button
                                type="submit"
                                className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Update
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* UPDATE TAX ADMINISTRATION CONTRACT ADDRESS*/}
            <div
                id="update-tax-administration"
                className="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6"
            >
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-1">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">
                            Update Tax Administration
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                            Update Tax Administration contract address by
                            inserting new contract address.
                        </p>
                    </div>
                    <div className="mt-5 md:col-span-2 md:mt-0">
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6">
                                <label
                                    htmlFor="tax-administration-contract-address"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Tax Administration contract address
                                </label>
                                <input
                                    type="text"
                                    name="tax-administration-contract-address"
                                    id="tax-administration-contract-address"
                                    autoComplete="tax-administration-contract-address"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>
                        <div className="flex mt-6 justify-end">
                            <button
                                type="submit"
                                className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Update
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* UPDATE PRICE ORACLE CONTRACT ADDRESS*/}
            <div
                id="update-price-oracle"
                className="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6"
            >
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-1">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">
                            Update Price Oracle
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                            Update Chainlink Price Feed contract address by
                            inserting new contract address.
                        </p>
                    </div>
                    <div className="mt-5 md:col-span-2 md:mt-0">
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6">
                                <label
                                    htmlFor="price-oracle-contract-address"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Chainlink Price Feed contract address
                                </label>
                                <input
                                    type="text"
                                    name="price-oracle-contract-address"
                                    id="price-oracle-contract-address"
                                    autoComplete="price-oracle-contract-address"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>
                        <div className="flex mt-6 justify-end">
                            <button
                                type="submit"
                                className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Update
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}
