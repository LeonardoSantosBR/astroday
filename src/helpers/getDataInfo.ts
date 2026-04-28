export function getDataInfo(): { day: string; month: string; year: number; monthShort: string } {
  const data = new Date();
  const day = String(data.getDate()).padStart(2, "0");
  const month = String(data.getMonth() + 1).padStart(2, "0");
  const year = data.getFullYear();

  const monthShort = data
    .toLocaleString("pt-BR", { month: "short" })
    .replace(".", "")
    .slice(0, 3).toUpperCase(); 

  return {
    day,
    month,
    year,
    monthShort
  };
}
