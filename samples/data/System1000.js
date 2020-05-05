function generateMatrix(rows, columns) {
  const matrix = []

  for (let i = 0; i < rows; i++) {
    const row = []
    for (let j = 0; j < columns; j++) {
      let value = i === j ? 1 : 0
      row.push(value)
    }
    matrix.push(row)
  }

  return matrix
}

const matrix = generateMatrix(1000, 1000)