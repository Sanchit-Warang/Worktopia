export default function formatDate(inputDate: string): string {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const date = new Date(inputDate);
  const formattedDate = date.toLocaleDateString('en-US', options);
  return formattedDate;
}