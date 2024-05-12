import axios, { AxiosResponse } from "axios";

interface Params {
  query: string;
  client_id: string;
  url: string;
  orientation: string;
  page: number;
  per_page: number;
}

export const params: Params = {
  query: "",
  client_id: "c3uuQ34TsHAzSvIPc6LLkx3obkt0-cKHEQMfZ1pNQtE",
  url: "https://api.unsplash.com/search/photos",
  orientation: "landscape",
  page: 1,
  per_page: 12,
};

export const requestPhotosByQuery = async (
  query: string,
  page: number
): Promise<Photo[]> => {
  const updatedParams = { ...params, query, page };
  const response: AxiosResponse<{ results: Photo[] }> = await axios.get(
    updatedParams.url,
    {
      params: updatedParams,
    }
  );
  return response.data.results;
};