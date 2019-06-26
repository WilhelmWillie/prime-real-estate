import React, { createContext } from 'react';

export default createContext(
  {
    result: {
      neighborhood: 'Mission District',
      street: 'Valencia St',
      avgValue: 1400000
    }
  }
);
