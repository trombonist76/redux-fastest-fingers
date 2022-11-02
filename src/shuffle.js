function shuffle(array) {
  const sortedArray = [...array.sort(() => Math.random() - 0.5)]

  return sortedArray;
}

export default shuffle