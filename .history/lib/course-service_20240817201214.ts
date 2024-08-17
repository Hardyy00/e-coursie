import { db } from "./db";
import { getSelf } from "./user-service";

export const getCourse = async (id: string) => {
  const course = await db.course.findUnique({
    where: {
      id,
    },
  });

  if (!course) {
    throw new Error("Course not found.");
  }

  return course;
};

export const getRecommendations = async () => {
  let userId;

  try {
    const self = await getSelf();
    userId = self.id;
  } catch {
    userId = null;
  }

  if (!userId) {
    const courses = await db.course.findMany();
    return courses;
  }

  const courses = await db.course.findMany({
    where: {
      NOT: {
        students: {
          some: {
            userId,
          },
        },
      },
    },

    select: {
      name: true,
      description: true,
      topics: true,
    },

    include: {
      author: {
        select: {
          name: true,
        },
      },
    },
  });

  return courses;
};
