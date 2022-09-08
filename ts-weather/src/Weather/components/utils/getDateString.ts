import { Months } from "../../../types";

export const getDateString = () => {
  const nth = (d: number) => {
    if (d > 3 && d < 21) return "th";
    switch (d % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  const day = new Date().getDate();
  const currentNth = nth(day);
  const month = Months[new Date().getMonth()];
  const year = new Date().getFullYear();

  return `(${day}${currentNth} ${month}, ${year})`;
};
