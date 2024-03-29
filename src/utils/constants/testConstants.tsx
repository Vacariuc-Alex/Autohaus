import {EMPTY_STRING, Product, User} from "src/utils/constants/constants";
import {AxiosRequestHeaders, AxiosResponse} from "axios";

//Data stubs
export const stubUser: User = {
    id: "1",
    username: "Test",
    email: "test@example.com",
    password: "dGVzdA==",
    role: "ADMIN",
};

export const stubProductOne: Product = {
    id: "1",
    company: "WAZ",
    model: "2106",
    year: 1986,
    vin: "JTDZN3EU4E3035524",
    color: "Red",
    price: 250,
    owner: stubUser,
    isFavourite: false
};

export const stubProductTwo: Product = {
    id: "2",
    company: "UAZ",
    model: "452",
    year: 1965,
    vin: "WAURGAFD1DN635608",
    color: "Green",
    price: 100,
    owner: stubUser,
    isFavourite: false
};

export const stubUserResponseData: User[] = [stubUser];
export const stubProductResponseData: Product[] = [stubProductOne, stubProductTwo];

// Mock redux initial state
export type InitialState = {
    wishListStore: {
        ids: string[];
    },
    productsStore: {
        responseData: Product[];
        loading: boolean;
        error: string | null;
        isRequestExecuted: boolean;
    },
    usersStore: {
        responseData: User[];
        loading: boolean;
        error: string | null;
        isRequestExecuted: boolean;
    },
    userSelectionStore: {
        selectedCompanies: string[];
        currentPage: number;
        numberOfPages: number;
        elementsPerPage: number;
    }
};

export const initialState: InitialState = {
    wishListStore: {
        ids: []
    },
    productsStore: {
        responseData: stubProductResponseData,
        loading: false,
        error: EMPTY_STRING,
        isRequestExecuted: true
    },
    usersStore: {
        responseData: stubUserResponseData,
        loading: false,
        error: EMPTY_STRING,
        isRequestExecuted: true
    },
    userSelectionStore: {
        selectedCompanies: [],
        currentPage: 1,
        numberOfPages: 1,
        elementsPerPage: 10
    }
};

//Mock axios response
const mockHeaders: {
    Authorization: string;
    set: jest.Mock<any, any>;
    Accept: string;
    get: jest.Mock<any, any>;
    "Content-Encoding": string;
    "User-Agent": string;
    has: jest.Mock<any, any>;
    "Content-Length": string;
    delete: jest.Mock<any, any>
} = {
    set: jest.fn(),
    get: jest.fn(),
    has: jest.fn(),
    delete: jest.fn(),
    "Content-Length": "mockedLength",
    "Content-Encoding": "mockedEncoding",
    "Accept": "mockedAccept",
    "User-Agent": "mockedUserAgent",
    "Authorization": "mockedAuthorization"
};
export const assertedMockHeaders: AxiosRequestHeaders = mockHeaders as unknown as AxiosRequestHeaders;
export const mockedResponse: AxiosResponse<any, any> = {
    data: null,
    status: 200,
    statusText: "OK",
    headers: assertedMockHeaders,
    config: {headers: assertedMockHeaders}
};
