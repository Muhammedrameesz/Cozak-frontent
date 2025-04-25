import { useState, useEffect, useCallback } from "react";
import axios, { AxiosError } from "axios";
import { baseUrl } from "../base/base_url";

interface BannerType {
  _id: string;
  BannerImage: string;
  BannerStatus: "Active" | "Inactive";
}

export const useActiveBanner = () => {
  const [banner, setBanner] = useState<BannerType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchActiveBanner = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`${baseUrl}/banner/get`);
      if (response.status === 200) {
        const activeBanner = response.data.Banner.find(
          (item: BannerType) => item.BannerStatus === "Active"
        );
        setBanner(activeBanner || null);
      } else {
        setError("Unexpected response status");
      }
    } catch (error) {
      const err = error as AxiosError<{ message?: string }>;
      const errorMessage = err?.response?.data?.message;
      setError(errorMessage || "Failed to fetch banner");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchActiveBanner();
  }, [fetchActiveBanner]);

  return { banner, loading, error };
};
