type todo = {
  id: number;
  title: string;
  completed: boolean;
};

export default async function getTodos() {
  await wait(2000);
  const res = await fetch(`${process.env.API_URL}/todos`);
  const data: todo[] = await res.json();
  return data;
}

export async function getUserTodos(userId: string | number) {
  await wait(2000);
  const res = await fetch(`${process.env.API_URL}/todos/?userId=${userId}`);
  const data: todo[] = await res.json();
  return data;
}

function wait(duration: number) {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, duration);
  });
}
