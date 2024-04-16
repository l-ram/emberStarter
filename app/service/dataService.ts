export const sharedScientists: string[] = [
  "Marie Curie",
  "Albert Einstein",
  "Sabina Spielrein",
];

export const updateData = (newData: string[]) => {
  sharedScientists.splice(0, sharedScientists.length, ...newData);
};
