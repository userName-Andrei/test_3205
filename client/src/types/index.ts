export interface IFormInputs {
    email: string;
    number: string;
}

export interface ErrorResponse {
    message: string;
}

export type Response = IFormInputs[] | ErrorResponse;
