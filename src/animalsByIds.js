function animalsByIds(...ids) {
    // seu código aqui
    if(!ids) return [];
    const result = data.animals.filter(e => ids.includes(e.id));
    return result;
  }