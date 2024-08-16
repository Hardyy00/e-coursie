import { db } from "./db";

export const getCourse = async (id: string) => {
  const course = await db.course.findUnique({
    where: {
      id,
    },
  });

  if (!course) {
    throw new Error("Course not found.");
  }
};
