export const convertAMToPM = (hour) => {
  if (hour >= 12) {
    if (hour % 12 === 0) {
      return { hr: 12, AP: "PM" };
    }
    return { hr: hour % 12, AP: "PM" };
  } else {
    if (hour % 12 === 0) {
      return { hr: 12, AP: "AM" };
    }
    return { hr: hour, AP: "AM" };
  }
};
