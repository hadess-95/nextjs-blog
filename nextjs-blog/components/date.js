import { parseISO, format } from 'date-fns';

export default function PostDate({ dateString }) {
  const date = parseISO(dateString);

  return (
    <time dateTime={dateString}>
      {format(date, 'dd/MM/yyyy')}
    </time>
  );
}