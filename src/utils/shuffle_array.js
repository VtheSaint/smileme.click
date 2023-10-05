export function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      // Generate a random index between 0 and i (inclusive)
      const j = Math.floor(Math.random() * (i + 1));
  
      // Swap the elements at i and j
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }