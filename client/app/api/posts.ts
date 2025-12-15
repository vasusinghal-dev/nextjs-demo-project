type post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

export default async function getPosts() {
  await wait(2000);
  const res = await fetch(`${process.env.API_URL}/posts`);
  const data: post[] = await res.json();
  return data;
}
export async function getPost(postId: number | string) {
  await wait(2000);
  const res = await fetch(`${process.env.API_URL}/posts/${postId}`);
  const data: post = await res.json();
  return data;
}

export async function getUserPosts(userId: string | number) {
  await wait(2000);
  const res = await fetch(`${process.env.API_URL}/posts/?userId=${userId}`);
  const data: post[] = await res.json();
  return data;
}

function wait(duration: number) {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, duration);
  });
}
