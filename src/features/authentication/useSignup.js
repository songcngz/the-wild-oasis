import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useSignup(params) {
  const navigate = useNavigate();
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      toast.success("Account created succesfully!Please verify the new account from the user's email address");
      navigate("/login", { replace: true });
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error(err);
    },
  });
  return { signup, isLoading };
}
