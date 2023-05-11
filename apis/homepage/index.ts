import { DataResponse } from '@services/request.type';
import { get } from '@services/fetcher';
import { HomepageResponse } from '@stores/homepage/type';

const apiHomepage = {
    async getHomepage(): Promise<DataResponse<HomepageResponse | null>> {
        try {
            const res = await get<HomepageResponse>(`${process.env.NEXT_PUBLIC_NWS_WEB_ADMIN_ENDPOINT}/wp-json/wp/v2/pages/10?_fields[]=title&_fields[]=acf`);
            return [res, null];
        } catch (error) {
            return [null, error];
        }
    },
};

export default apiHomepage;
