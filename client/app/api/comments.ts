type comment = {
  id: number;
  email: string;
  body: string;
  postId: number;
};

export default async function getPostComments(postId: number | string) {
  await wait(2000);
  const res = await fetch(`${process.env.API_URL}/posts/${postId}/comments`);
  const data: comment[] = await res.json();
  return data;
}

function wait(duration: number) {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, duration);
  });
}
