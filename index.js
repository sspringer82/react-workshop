const obj = { name: 'Basti', address: { street: 'Schulstraße' } };

const clone1 = JSON.parse(JSON.stringify(obj));
clone1.address.street = 'Mühldorfstraße';
const clone2 = { ...obj };
clone2.address.street = 'Mühldorfstraße';
