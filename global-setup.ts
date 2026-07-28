import fs from 'fs';

export default async () => {
  // Generate unique inbox name
  const id = Math.random().toString(36).substring(2, 10);
  const email = `automation-${id}@yourdomain.catchmail.io`;

  // Save to a file so tests can read it
  fs.writeFileSync('generated-email.json', JSON.stringify({ email }));

  console.log(`Generated Catch.io email: ${email}`);
};
