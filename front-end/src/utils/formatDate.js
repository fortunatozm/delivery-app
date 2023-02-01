export default function formatDate(date) {
  const year = date.split('-')[0];
  const month = date.split('-')[1];
  const day = date.split('-')[2][0] + date.split('-')[2][1];
  return `${day}/${month}/${year}`;
}
