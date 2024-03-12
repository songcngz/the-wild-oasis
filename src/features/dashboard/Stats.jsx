import { formatCurrency } from "../../utils/helpers";
import Stat from "./Stat";
import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  //  1.
  const numBookings = bookings.length;
  //  2.
  const totalSales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);
  //  3.
  const numCheckins = confirmedStays.length;
  //   4. occupation = num checked in nights / all available nights(num days * num cabins)
  const occupation =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinCount);
  return (
    <>
      <Stat
        color="blue"
        title="Bookings"
        value={numBookings}
        icon={<HiOutlineBriefcase />}
      />
      <Stat
        color="green"
        title="Sales"
        value={formatCurrency(totalSales)}
        icon={<HiOutlineBanknotes />}
      />
      <Stat
        color="indigo"
        title="Check Ins"
        value={numCheckins}
        icon={<HiOutlineCalendarDays />}
      />
      <Stat
        color="yellow"
        title="Occupancy rate"
        value={Math.round(occupation * 100) + " %"}
        icon={<HiOutlineChartBar />}
      />
    </>
  );
}

export default Stats;
