import { format } from 'date-fns';

export function formatDateTime(date: string | number | Date) {
  return format(date, 'dd-MM-yyyy hh:mmaaa');
}
