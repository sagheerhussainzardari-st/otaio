export const discountedPrice = (price, percentage = 20) => {
   return (+(price) - +(price) * (percentage / 100)).toFixed(2)
};
