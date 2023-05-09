import { ActionStatus } from '@stores/type';

export type DemoState = {
    status: ActionStatus;
    DemosResponse: DemosResponse;
    loadingGetDemos: boolean;
};

export type DemosResponse = Demo[];

export type Demo = {
    id: number;
    name: string;
};
