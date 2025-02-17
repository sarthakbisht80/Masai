function countCategories(categories) {
    const categoryCount = categories.reduce((acc, category) => {
      acc[category] = (acc[category] || 0) + 1;
      return acc;
    }, {});
  
    const sortedCategories = Object.entries(categoryCount)
      .sort((a, b) => b[1] - a[1]);  
  
    return sortedCategories;
  }
  
  const categories = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];
  const result = countCategories(categories);
  console.log(result);
  