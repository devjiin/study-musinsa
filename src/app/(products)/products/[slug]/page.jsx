export default async function Products({ params, searchParams }) {
  const { slug } = await params;
  console.log("params:", { slug });
  console.log("searchParams:", await searchParams);
  return <>상세페이지{slug}</>;
}
