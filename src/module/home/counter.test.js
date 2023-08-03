describe('counter Items', () => {
  it('should count the number of items', async () => {
    const countItems = await fetch(
      'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood',
    );
    const data = await countItems.json();
    const size = data.meals.length;
    expect(size).toBe(28);
  });
});
