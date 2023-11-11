export const formatDate = (dateInput: string): string => {
  let formattedDate: string = "";
  if (dateInput != null) {
    formattedDate = new Date(dateInput).toLocaleTimeString([], {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }
  return formattedDate;
};
