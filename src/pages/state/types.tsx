enum CivilState {
    UNMARRIED,
    MARRIED,
    REGISTERED_PARTNERSHIP,
    DIVORCED,
    WIDOW,
    WIDOWER,
}

enum Gender {
    FEMALE,
    MALE,
    UNKNOWN,
}

enum Residency {
    DUTCH_NATIONALITY,
    PRIVILEGE,
    RESIDENT_PERMIT,
    PENDING_CONSIDERATION_OF_THE_APPLICATION_FOR_A_RESIDENCE_PERMIT,
    NONE,
}

interface Name {
    first: string;
    last: string;
}

interface DateOfBirth {
    day: number;
    month: number;
    yera: number;
}

interface PlaceOfBirth {
    city: string;
    province: string;
    country: string;
}

interface Parents {
    father: string;
    mother: string;
}

interface Children {
    hasChildren: boolean;
    childrenAccounts: string[3];
}

interface CurrentAddress {
    street: string;
    houseNumber: number;
    postcode: string;
    municipality: string;
}

export interface IPersonalRecords {
    name: Name;
    gender: Gender;
    account: string;
    dateOfBirth: DateOfBirth;
    placeOfBirth: PlaceOfBirth;
    parents: Parents;
    civilState: CivilState;
    children: Children;
    residency: Residency;
    currentAddress: CurrentAddress;
}
