const taxes = [{ id: "transfer-tax", name: "Transfer tax", taxIdentifier: 1 }];

const countries = [
    { id: "bel", name: "Belgium", countryCode: "BEL" },
    { id: "nld", name: "Netherlands", countryCode: "NLD" },
    { id: "lux", name: "Luxembourg", countryCode: "LUX" },
];

const municipalities = [
    { id: "amsterdam", name: "Amsterdam", cbsCode: "0363" },
    { id: "rotterdam", name: "Rotterdam", cbsCode: "0599" },
    { id: "the-hague", name: "The Hague", cbsCode: "0518" },
    { id: "utrecht", name: "Utrecht", cbsCode: "0344" },
    { id: "eindhoven", name: "Eindhoven", cbsCode: "0772" },
];

export default function State() {
    return (
        <div className="m-8">
            <form className="space-y-8 divide-y divide-gray-200">
                <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                    <div
                        id="store-personal-records"
                        className="space-y-6 pt-8 sm:space-y-5 sm:pt-10"
                    >
                        <div>
                            <h1 className="text-2xl font-medium leading-6 text-gray-900 mb-4">
                                Store Personal Records
                            </h1>
                            <h3 className="text-lg font-medium leading-6 text-gray-900">
                                Name
                            </h3>
                            <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                Fill in person's first name and last name.
                            </p>
                        </div>
                        <div className="space-y-6 sm:space-y-5">
                            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                                <label
                                    htmlFor="first-name"
                                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                                >
                                    First name
                                </label>
                                <div className="mt-1 sm:col-span-2 sm:mt-0">
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                                <label
                                    htmlFor="last-name"
                                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                                >
                                    Last name
                                </label>
                                <div className="mt-1 sm:col-span-2 sm:mt-0">
                                    <input
                                        type="text"
                                        name="last-name"
                                        id="last-name"
                                        autoComplete="family-name"
                                        className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* GENDER */}
                    {/*<div className="space-y-6 pt-8 sm:space-y-5 sm:pt-10"></div>*/}
                    <div className="space-y-6 divide-y divide-gray-200 pt-8 sm:space-y-5 sm:pt-10">
                        <div>
                            <h3 className="text-lg font-medium leading-6 text-gray-900">
                                Gender
                            </h3>
                            <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                Choose what gender does the person belong to.
                            </p>
                        </div>
                        <div className="space-y-6 divide-y divide-gray-200 sm:space-y-5">
                            <div className="pt-6 sm:pt-5">
                                <div
                                    role="group"
                                    aria-labelledby="label-notifications"
                                >
                                    <div className="sm:grid sm:grid-cols-3 sm:items-baseline sm:gap-4">
                                        <div>
                                            <div
                                                className="text-base font-medium text-gray-900 sm:text-sm sm:text-gray-700"
                                                id="label-notifications"
                                            >
                                                Genders
                                            </div>
                                        </div>
                                        <div className="sm:col-span-2">
                                            <div className="max-w-lg">
                                                <p className="text-sm text-gray-500">
                                                    3 genders
                                                </p>
                                                <div className="mt-4 space-y-4">
                                                    <div className="flex items-center">
                                                        <input
                                                            id="push-female"
                                                            name="push-genders"
                                                            type="radio"
                                                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                        />
                                                        <label
                                                            htmlFor="push-female"
                                                            className="ml-3 block text-sm font-medium text-gray-700"
                                                        >
                                                            Female
                                                        </label>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <input
                                                            id="push-male"
                                                            name="push-genders"
                                                            type="radio"
                                                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                        />
                                                        <label
                                                            htmlFor="push-male"
                                                            className="ml-3 block text-sm font-medium text-gray-700"
                                                        >
                                                            Male
                                                        </label>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <input
                                                            id="push-unknown"
                                                            name="push-genders"
                                                            type="radio"
                                                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                        />
                                                        <label
                                                            htmlFor="push-unknown"
                                                            className="ml-3 block text-sm font-medium text-gray-700"
                                                        >
                                                            Unknown
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ACCOUNT */}
                    <div className="space-y-6 pt-8 sm:space-y-5 sm:pt-10">
                        <div>
                            <h3 className="text-lg font-medium leading-6 text-gray-900">
                                Account
                            </h3>
                            <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                Fill in person's account address.
                            </p>
                        </div>
                        <div className="space-y-6 sm:space-y-5">
                            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                                <label
                                    htmlFor="first-name"
                                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                                >
                                    Ethereum account address
                                </label>
                                <div className="mt-1 sm:col-span-2 sm:mt-0">
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* DATE OF BIRTH */}
                    <div className="space-y-6 pt-8 sm:space-y-5 sm:pt-10">
                        <div>
                            <h3 className="text-lg font-medium leading-6 text-gray-900">
                                Date of Birth
                            </h3>
                            <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                Fill in person's date of birth (Day: 1, Month:
                                12, Year: 2000)
                            </p>
                        </div>
                        <div className="space-y-6 sm:space-y-5">
                            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                                <label
                                    htmlFor="first-name"
                                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                                >
                                    Day
                                </label>
                                <div className="mt-1 sm:col-span-2 sm:mt-0">
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                                <label
                                    htmlFor="last-name"
                                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                                >
                                    Month
                                </label>
                                <div className="mt-1 sm:col-span-2 sm:mt-0">
                                    <input
                                        type="text"
                                        name="last-name"
                                        id="last-name"
                                        autoComplete="family-name"
                                        className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                                >
                                    Year
                                </label>
                                <div className="mt-1 sm:col-span-2 sm:mt-0">
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* PLACE OF BIRTH */}
                    <div className="space-y-6 pt-8 sm:space-y-5 sm:pt-10">
                        <div>
                            <h3 className="text-lg font-medium leading-6 text-gray-900">
                                Place of Birth
                            </h3>
                            <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                Fill in person's place of birth.
                            </p>
                        </div>
                        <div className="space-y-6 sm:space-y-5">
                            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                                <label
                                    htmlFor="first-name"
                                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                                >
                                    City
                                </label>
                                <div className="mt-1 sm:col-span-2 sm:mt-0">
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                                <label
                                    htmlFor="last-name"
                                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                                >
                                    Province
                                </label>
                                <div className="mt-1 sm:col-span-2 sm:mt-0">
                                    <input
                                        type="text"
                                        name="last-name"
                                        id="last-name"
                                        autoComplete="family-name"
                                        className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                                >
                                    Country
                                </label>
                                <div className="mt-1 sm:col-span-2 sm:mt-0">
                                    <select
                                        id="country"
                                        name="country"
                                        autoComplete="country-name"
                                        className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                                    >
                                        {countries.map((country) => (
                                            <option key={country.id}>
                                                {country.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* PARENTS */}
                    <div className="space-y-6 pt-8 sm:space-y-5 sm:pt-10">
                        <div>
                            <h3 className="text-lg font-medium leading-6 text-gray-900">
                                Parents
                            </h3>
                            <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                Fill in person's parents account addresses.
                            </p>
                        </div>
                        <div className="space-y-6 sm:space-y-5">
                            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                                <label
                                    htmlFor="first-name"
                                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                                >
                                    Ethereum account address of father
                                </label>
                                <div className="mt-1 sm:col-span-2 sm:mt-0">
                                    <input
                                        type="text"
                                        name="street-address"
                                        id="street-address"
                                        autoComplete="street-address"
                                        className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                                <label
                                    htmlFor="first-name"
                                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                                >
                                    Ethereum account address of mother
                                </label>
                                <div className="mt-1 sm:col-span-2 sm:mt-0">
                                    <input
                                        type="text"
                                        name="street-address"
                                        id="street-address"
                                        autoComplete="street-address"
                                        className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CHILDREN */}
                    <div className="space-y-6 pt-8 sm:space-y-5 sm:pt-10">
                        <div>
                            <h3 className="text-lg font-medium leading-6 text-gray-900">
                                Children
                            </h3>
                            <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                If person does have children full in their
                                account addresses.
                            </p>
                        </div>
                        <div className="space-y-6 sm:space-y-5">
                            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                                <label
                                    htmlFor="first-name"
                                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                                >
                                    Ethereum account address of the first child
                                </label>
                                <div className="mt-1 sm:col-span-2 sm:mt-0">
                                    <input
                                        type="text"
                                        name="street-address"
                                        id="street-address"
                                        autoComplete="street-address"
                                        className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                                <label
                                    htmlFor="first-name"
                                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                                >
                                    Ethereum account address of the second child
                                </label>
                                <div className="mt-1 sm:col-span-2 sm:mt-0">
                                    <input
                                        type="text"
                                        name="street-address"
                                        id="street-address"
                                        autoComplete="street-address"
                                        className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                                <label
                                    htmlFor="first-name"
                                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                                >
                                    Ethereum account address of the third child
                                </label>
                                <div className="mt-1 sm:col-span-2 sm:mt-0">
                                    <input
                                        type="text"
                                        name="street-address"
                                        id="street-address"
                                        autoComplete="street-address"
                                        className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RESIDENCY */}
                    {/*<div className="space-y-6 pt-8 sm:space-y-5 sm:pt-10"></div>*/}
                    <div className="space-y-6 divide-y divide-gray-200 pt-8 sm:space-y-5 sm:pt-10">
                        <div>
                            <h3 className="text-lg font-medium leading-6 text-gray-900">
                                Residency
                            </h3>
                            <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                Select person's residency reason.
                            </p>
                        </div>
                        <div className="space-y-6 divide-y divide-gray-200 sm:space-y-5">
                            <div className="pt-6 sm:pt-5">
                                <div
                                    role="group"
                                    aria-labelledby="label-notifications"
                                >
                                    <div className="sm:grid sm:grid-cols-3 sm:items-baseline sm:gap-4">
                                        <div>
                                            <div
                                                className="text-base font-medium text-gray-900 sm:text-sm sm:text-gray-700"
                                                id="label-notifications"
                                            >
                                                Residencies
                                            </div>
                                        </div>
                                        <div className="sm:col-span-2">
                                            <div className="max-w-lg">
                                                <p className="text-sm text-gray-500">
                                                    Select 1
                                                </p>
                                                <div className="mt-4 space-y-4">
                                                    <div className="flex items-center">
                                                        <input
                                                            id="push-female"
                                                            name="push-genders"
                                                            type="radio"
                                                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                        />
                                                        <label
                                                            htmlFor="push-female"
                                                            className="ml-3 block text-sm font-medium text-gray-700"
                                                        >
                                                            Dutch nationality
                                                        </label>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <input
                                                            id="push-male"
                                                            name="push-genders"
                                                            type="radio"
                                                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                        />
                                                        <label
                                                            htmlFor="push-male"
                                                            className="ml-3 block text-sm font-medium text-gray-700"
                                                        >
                                                            Privilege
                                                        </label>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <input
                                                            id="push-unknown"
                                                            name="push-genders"
                                                            type="radio"
                                                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                        />
                                                        <label
                                                            htmlFor="push-unknown"
                                                            className="ml-3 block text-sm font-medium text-gray-700"
                                                        >
                                                            Residence permit
                                                        </label>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <input
                                                            id="push-unknown"
                                                            name="push-genders"
                                                            type="radio"
                                                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                        />
                                                        <label
                                                            htmlFor="push-unknown"
                                                            className="ml-3 block text-sm font-medium text-gray-700"
                                                        >
                                                            Pending
                                                            consideration of the
                                                            application for a
                                                            residence permit
                                                        </label>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <input
                                                            id="push-unknown"
                                                            name="push-genders"
                                                            type="radio"
                                                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                        />
                                                        <label
                                                            htmlFor="push-unknown"
                                                            className="ml-3 block text-sm font-medium text-gray-700"
                                                        >
                                                            None
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CURRENT ADDRESS */}
                    <div className="space-y-6 pt-8 sm:space-y-5 sm:pt-10">
                        <div>
                            <h3 className="text-lg font-medium leading-6 text-gray-900">
                                Current Address
                            </h3>
                            <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                Fill in person's current address.
                            </p>
                        </div>
                        <div className="space-y-6 sm:space-y-5">
                            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                                <label
                                    htmlFor="country"
                                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                                >
                                    Country
                                </label>
                                <div className="mt-1 sm:col-span-2 sm:mt-0">
                                    <select
                                        id="country"
                                        name="country"
                                        autoComplete="country-name"
                                        className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                                    >
                                        {countries.map((country) => (
                                            <option key={country.id}>
                                                {country.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                                <label
                                    htmlFor="street-address"
                                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                                >
                                    Street address
                                </label>
                                <div className="mt-1 sm:col-span-2 sm:mt-0">
                                    <input
                                        type="text"
                                        name="street-address"
                                        id="street-address"
                                        autoComplete="street-address"
                                        className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                                <label
                                    htmlFor="city"
                                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                                >
                                    City
                                </label>
                                <div className="mt-1 sm:col-span-2 sm:mt-0">
                                    <input
                                        type="text"
                                        name="city"
                                        id="city"
                                        autoComplete="address-level2"
                                        className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                                <label
                                    htmlFor="region"
                                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                                >
                                    Province
                                </label>
                                <div className="mt-1 sm:col-span-2 sm:mt-0">
                                    <input
                                        type="text"
                                        name="region"
                                        id="region"
                                        autoComplete="address-level1"
                                        className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                                <label
                                    htmlFor="postal-code"
                                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                                >
                                    Postcode
                                </label>
                                <div className="mt-1 sm:col-span-2 sm:mt-0">
                                    <input
                                        type="text"
                                        name="postal-code"
                                        id="postal-code"
                                        autoComplete="postal-code"
                                        className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                                <label
                                    htmlFor="country"
                                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                                >
                                    Municipality
                                </label>
                                <div className="mt-1 sm:col-span-2 sm:mt-0">
                                    <select
                                        id="country"
                                        name="country"
                                        autoComplete="country-name"
                                        className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                                    >
                                        {municipalities.map((municipality) => (
                                            <option key={municipality.id}>
                                                {municipality.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-5">
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Store
                        </button>
                    </div>
                </div>
            </form>

            {/* UPDATE TAX */}
            <form className="space-y-6" action="#" method="POST">
                {/* UPDATE TAX */}
                <div
                    id="update-tax"
                    className="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6"
                >
                    <div className="md:grid md:grid-cols-3 md:gap-6">
                        <div className="md:col-span-1">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">
                                Update Tax
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">
                                Update tax by defining type of tax and inserting
                                tax amount in percentage.
                            </p>
                        </div>
                        <div className="mt-5 md:col-span-2 md:mt-0">
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                    <label
                                        htmlFor="update-tax"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Type of Tax
                                    </label>
                                    <select
                                        id="municipality"
                                        name="municipality"
                                        autoComplete="municipality-name"
                                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    >
                                        {taxes.map((tax) => (
                                            <option key={tax.id}>
                                                {tax.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="col-span-6">
                                    <label
                                        htmlFor="municipality-contract-address"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Tax percentage
                                    </label>
                                    <div className="mt-1 sm:col-span-2 sm:mt-0">
                                        <div className="flex max-w-lg rounded-md shadow-sm">
                                            <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">
                                                %
                                            </span>
                                            <input
                                                type="text"
                                                name="username"
                                                id="username"
                                                autoComplete="username"
                                                className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>
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
        </div>
    );
}
