interface DepthLevelItem {
  name: string;
  color: string;
  image: string;
  id_encrypt: string;
}

export async function getTone({
  endpoint,
}: {
  endpoint: string;
}): Promise<DepthLevelItem[]> {
  const res = await fetch(
    `https://market.berlstore.com/api/personalcolor/${endpoint}`,
    { cache: "no-store" }
  );

  if (!res.ok) throw new Error("Failed to fetch depth level");

  const data = await res.json();
  return data.data as DepthLevelItem[];
}
