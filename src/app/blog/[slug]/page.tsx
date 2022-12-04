export default function GetBlog({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  return (
    <h1>
      You r reading blog: {params.slug} | {JSON.stringify(params)}
    </h1>
  );
}
