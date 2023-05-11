import { ActionStatus } from '@stores/type';

export type HomepageState = {
    status: ActionStatus;
    HomepageResponse: HomepageResponse;
    loadingHomepage: boolean;
};

export type HomepageResponse = Homepage[];

export type Homepage = {
    title: object;
    acf: object;
    _links: object;
};
