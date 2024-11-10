import { useQuery } from "@tanstack/react-query";
import { getTeamData , getJobPost} from "src/services";

export function useGetTeamData() {
  const { data, isLoading, isFetching, error } = useQuery({
    queryKey: ["teamData"],
    queryFn: getTeamData,
  });

  if (error) throw new Error(error.message);

  return { teamData: data?.data, isLoading, isFetching, error };
}

export function useGetJobPost() {
  const { data, isLoading, isFetching, error } = useQuery({
    queryKey: ["jobPost"],
    queryFn: getJobPost,
  });

  if (error) throw new Error(error.message);

  return { jobPost: data?.data, isLoading, isFetching, error };
}
