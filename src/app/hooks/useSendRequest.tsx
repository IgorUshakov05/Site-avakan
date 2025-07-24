import { useMutation } from "@tanstack/react-query";
import axios from "axios";

interface ServerResponse {
  success: boolean;
  message: string;
  data?: any;
}

// Для формы с файлом лучше принимать FormData напрямую
export default function useSendRequest() {
  return useMutation<ServerResponse, Error, FormData>({
    mutationFn: async (formData) => {
      const response = await axios.post<ServerResponse>(
        "https://api.huntteam.ru/api/v1/request",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data;
    },
  });
}
