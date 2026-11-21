export function getDrinkByProfession(param: string): string {
  const val = param.toLowerCase();
  switch (val) {
    case "jabroni":
      return "Patron Tequila";
      break;
    case "school counselor":
      return "Anything with Alcohol";
      break;
    case "programmer":
      return "Hipster Craft Beer";
      break;
    case "bike gang member":
      return "Moonshine";
      break;
    case "politician":
      return "Your tax dollars";
      break;
    case "rapper":
      return "Cristal";
      break;
    default:
      return "Beer";
  }
}

// alternate solution
const drinks: Record<string, string> = {
  jabroni: "Patron Tequila",
  "school counselor": "Anything with Alcohol",
  programmer: "Hipster Craft Beer",
  "bike gang member": "Moonshine",
  politician: "Your tax dollars",
  rapper: "Cristal",
};

export function getDrinkByProfessionAlt(param: string): string {
  return drinks[param.toLowerCase()] || "Beer";
}
