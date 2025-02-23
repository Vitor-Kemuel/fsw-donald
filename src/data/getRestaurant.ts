import { db } from "@/lib/prisma";

export const getRestaurantBySlug = async (slug: string) => {
  const res = await db.restaurant.findUnique({
    where: { slug },
  });
  return res;
};
