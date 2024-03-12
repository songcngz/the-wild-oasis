import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { updateCurrentUser } from "../../services/apiAuth";

function useUpdatedUser() {
  const queryClient = useQueryClient();
  const { mutate: updatingUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: ({ user }) => {
      toast.success("User successfully updated");
      queryClient.setQueryData(["user"], user);
    },
    onError: (err) => toast.error(err.message),
  });
  return { updatingUser, isUpdating };
}

export default useUpdatedUser;
