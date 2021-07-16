export const getGroups = (intraDayTradeHistoryList) => {
  return intraDayTradeHistoryList.reduce((acc, curr) => {
    if (curr.conract.includes("PH")) {
      const tradeHistoryList = acc.find((items) =>
        items.some((item) => item.conract === curr.conract)
      );
      const conract = curr.conract;
      const price = (curr.price * curr.quantity) / 10;
      const quantity = curr.quantity / 10;
      if (tradeHistoryList) {
        tradeHistoryList.push({ conract, price, quantity });
      } else {
        acc.push([
          {
            conract,
            price,
            quantity,
          },
        ]);
      }
    }
    return acc;
  }, []);
};
