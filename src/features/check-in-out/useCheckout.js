import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";


export function useCheckout(params) {
  const queryClient = useQueryClient();
  
  const { mutate: checkout, isLoading: isCheckout } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfully checkout`);
      queryClient.invalidateQueries({ active: true });
     
    },
    onError: (data) =>
      toast.error(`Booking #${data.id} cannot able to checkout`),
  });

  return { checkout, isCheckout };
}
