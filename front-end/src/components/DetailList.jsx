// import React from 'react';

// function DetailList() {
//   const items = [{ index: 1, name: 'stella', quantity: 2, price: 2.99 }];
//   return (
//     <table>
//       <tr>
//         <th>
//           Item
//         </th>
//         <th>
//           Descrição
//         </th>
//         <th>
//           Quantidade
//         </th>
//         <th>
//           Valor Unitário
//         </th>
//         <th>
//           Sub-Total
//         </th>
//       </tr>
//       { items.map((item) => (
//         <tr key={ item.index }>
//           <th
//             data-testid={ `customer_order_details__element-order-table-item-number-
//             ${index}` }
//           >
//             {item.index}
//           </th>
//           <th
//             data-testid={ `customer_order_details__element-order-table-name-${index}` }
//           >
//             {item.name}
//           </th>
//           <th
//             data-testid={ `customer_order_details__element-order-table-quantity-
//             ${index}` }
//           >
//             {item.quantity}
//           </th>
//           <th
//             data-testid={ `ustomer_order_details__element-order-table-unit-price-
//             ${index}` }
//           >
//             { item.price }
//           </th>
//           <th
//             data-testid={ `customer_order_details__element-order-table-sub-total-
//             ${index}` }
//           >
//             { item.quantity * item.price }
//           </th>
//         </tr>
//       )) }
//     </table>
//   );
// }

// export default DetailList;
