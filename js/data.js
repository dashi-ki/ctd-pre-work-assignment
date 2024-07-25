console.log("breeds is loaded");

function prepareGroups(breeds) {
  const groups = {};

  breeds.forEach((breed) => {
    const group = breed.breed_group || "Unknown";
    if (!groups[group]) {
      groups[group] = [];
    }

    groups[group].push(breed);
  });

  return groups;
}
