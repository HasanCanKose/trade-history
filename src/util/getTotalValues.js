export const getTotalValues = (groups) => {
  return groups.map((group) => {
    const { quantity, price } = group.reduce(
      (acc, curr) => {
        return {
          quantity: acc.quantity + curr.quantity,
          price: acc.price + curr.price,
        };
      },
      { quantity: 0, price: 0 }
    );

    const weightedAveragePrice =
      group.reduce((acc, curr) => {
        return acc + curr.price * curr.quantity;
      }, 0) / quantity;

    return {
      conract: group[0].conract,
      quantity,
      price,
      weightedAveragePrice,
    };
  });
};
