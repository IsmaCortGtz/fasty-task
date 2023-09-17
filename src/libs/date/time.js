export const daysNames = ["Dom.", "Lun.", "Mar.", "Miérc.", "Juev.", "Vier.", "Sáb."];
export const monthNames = ["Ene.", "Feb.", "Mar.", "Abr.", "May.", "Jun.", "Jul.", "Ago.", "Sep.", "Oct.", "Nov.", "Dic."];


export function ret12Hours(hourNum, minutes) {
  if (hourNum === 0) return `12:${String(minutes).padStart(2, "0")} AM`;
  if (hourNum < 12) return `${String(hourNum).padStart(2, "0")}:${String(minutes).padStart(2, "0")} AM`;
  if (hourNum === 12) return `12:${String(minutes).padStart(2, "0")} PM`;
  if (hourNum > 12) return `${String(hourNum - 12).padStart(2, "0")}:${String(minutes).padStart(2, "0")} PM`;
};


export function formatDate(dateObj) {
  return `${daysNames[dateObj.getDay()]}  -  ${String(dateObj.getDate()).padStart(2, "0")} / ${monthNames[dateObj.getMonth()]} / ${dateObj.getFullYear()}`;
}