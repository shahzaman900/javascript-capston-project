const apiUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';

describe('Counter Items API', () => {
  test('returns the correct number of items', async () => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    expect(data.meals).toHaveLength(28);
  });

  test('does not return an incorrect number of items', async () => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    expect(data.meals).not.toHaveLength(27);
  });

  test('returns non-empty data', async () => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    expect(data.meals).not.toHaveLength(0);
  });
});
