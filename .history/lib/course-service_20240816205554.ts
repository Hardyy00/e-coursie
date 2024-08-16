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

  return course;
};

export const getRecommendations = async (id: string | undefined) => {
  if (!id) {
    const courses = await db.course.findMany();
    return courses;
  }

  const course = await db.course.findUnique({
    where: {
       NOT:{
           some
       }
      },
    },
  });
};
