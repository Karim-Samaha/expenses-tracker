export default interface Expenses {
  category: string;
  amount: string;
  date?: Date | null;
  file?: File | null;
}
