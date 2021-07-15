const TableItem = ({
  date,
  totalPrice,
  totalQuantity,
  weightedAveragePrice,
}) => {
  return (
    <>
      <tr>
        <td>{date}</td>
        <td>{totalPrice}</td>
        <td>{totalQuantity}</td>
        <td>{weightedAveragePrice}</td>
      </tr>
    </>
  );
};

export default TableItem;
