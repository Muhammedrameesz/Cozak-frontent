export default async function Page({
  params,
}: {
  params: Promise<{ product_id: string }>
}) {
  const slug = (await params).product_id
  return <div>My Post: {slug}</div>
}