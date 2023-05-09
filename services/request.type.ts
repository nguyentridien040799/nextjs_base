export enum ApiResponseCode {
    Failure = -1,
    Success = 1,
}

export interface ApiResponse<T = {}> {
    success: boolean;
    data?: T;
    message?: string;
    pagination?: PaginationState;
    next_cursor?: string | null;
}

export type DataResponse<Data = null, Error = any> = [ApiResponse<Data> | null, Error];

export interface DataPagination<Data> {
    totalDocs: number;
    limit: number;
    totalPages: number;
    page: number;
    pagingCounter: number;
    hasNextPage: boolean;
    prevPage: number;
    nextPage: number;
    docs: Data[];
}

export type PaginationState = {
    current: number;
    total: number;
};
