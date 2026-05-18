import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { authService } from "../api/authService";

export const useAuth = () => {
    const queryClient = useQueryClient();

    // GET CURRENT USER (Checks cookie on app load)
    const { data: user, isLoading, isError } = useQuery({
        queryKey: ['authUser'],
        queryFn: authService.getMe,
        retry: false, // Don't retry if the cookie is missing/invalid
        staleTime: Infinity,
    })

    //REGISTER MUTATION
    const registerMutation = useMutation({
        mutationFn: authService.register,
        onSuccess: (data) => {
            queryClient.setQueriesData(['authUser'], data.user);
        },
    })

    //LOGIN MUTATION 
    const loginMutation = useMutation({
        mutationFn: authService.login,
        onSuccess: (data) => {
            queryClient.setQueryData(['authUser'], data.user);
        }
    })

    //LOGOUT MUTATION
    const logoutMutation = useMutation({
        mutationFn: authService.logout,
        onSuccess: () => {
            queryClient.setQueryData(['authUser'], null);
            queryClient.clear();
        }
    })


    return {
        user,
        isLoading,
        isError,
        register: registerMutation.mutateAsync, 
        login: loginMutation.mutateAsync,
        logout: logoutMutation.mutate, 
        isLogging: loginMutation.isPending,
        isRegistering: registerMutation.isPending,
        isLoggingOut: logoutMutation.isPending,
    }

}