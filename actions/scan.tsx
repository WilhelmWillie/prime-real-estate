export const getResult = store => {
  const neighborhoods = [
    'Mission District',
    'Mission Bay',
    'SOMA',
    'Pacific Heights',
    'Nob Hill',
    'Hayes Valley'
  ]

  const streets = [
    'Mission Street',
    'Market Street',
    'California Street',
    'Van Ness'
  ]

  const result = {
    neighborhood: neighborhoods[Math.floor(Math.random() * neighborhoods.length)],
    street: streets[Math.floor(Math.random() * streets.length)],
    avgValue: Math.floor(Math.random() * 1000000 + 1000000)
  }

  const newHistory = store.state.history;
  newHistory.unshift(result);
  store.setState({ history: newHistory, result });
};
