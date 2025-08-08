import { prisma } from "../config/prisma";

export const getAll = async () => {
  const users = await prisma.user.findMany();

  return users;
};

export const getById = async (id: number) => {
  const user = await prisma.user.findUnique({
    where: { id },
  });

  return user;
};

export const create = async (data: {
  username: string;
  email: string;
  password: string;
}) => {
  const user = await prisma.user.create({
    data,
  });

  return user;
};

export const update = async (
  id: number,
  data: { username?: string; email?: string; password?: string }
) => {
  const user = await prisma.user.update({ where: { id }, data });

  return user;
};

export const remove = async (id: number) => {
  const user = await prisma.user.delete({ where: { id } });

  return user;
};
