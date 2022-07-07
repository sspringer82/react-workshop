const url = 'http://localhost:3001/books';
export async function loadData() {
  const response = await fetch(url);

  if (response.ok) {
    const data = await response.json();
    return data;
  }
  throw new Error('nope!');
}

export async function removeData(id: number) {
  await fetch(`${url}/${id}`, { method: 'DELETE' });
  return id;
}
