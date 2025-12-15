type user = {
  id: number;
  name: string;
  email: string;
  website: string;
  address: {
    city: string;
    street: string;
    zipcode: string;
    suite: string;
  };
  company: { name: string };
};

export default async function getUsers() {
  await wait(2000);
  const res = await fetch(`${process.env.API_URL}/users`);
  const data: user[] = await res.json();
  return data;
}

export async function getUser(userId: number | string) {
  await wait(2000);
  const res = await fetch(`${process.env.API_URL}/users/${userId}`);
  const data: user = await res.json();
  return data;
}

function wait(duration: number) {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, duration);
  });
}
