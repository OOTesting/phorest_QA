

export const buyer = {
  firstName: 'John',
  lastName: 'Jones-Smith',
  email: 'oorupabo+101@gmail.com',
};

export const friend = {
  email: 'tony.stark@test.com',
  message: 'Happy Birthday! <3 Enjoy & relax — you earned it!'
};


export const card = {
  number: '4111 1111 1111 1111',
  expiry: '12/26',
  cvc: '999',
};

export const amounts = {
  fixed: '50',
  fixed2: '100',
  custom: '65',
  min: '20',
  max: '1000',
  belowMin: '19',
  aboveMax: '1001'
};

// random email 
export function uniqueEmail(prefix = 'test') {
  const ts = Date.now();
  const rand = Math.floor(Math.random() * 10000);
  return `${prefix}+${ts}-${rand}@example.com`;
}