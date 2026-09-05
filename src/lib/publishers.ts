/**
 * Provides data-access functions for publisher records.
 */
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/**
 * Retrieves all publishers with their identifiers and names.
 *
 * @returns A promise that resolves to the list of publishers.
 */
export async function getPublisher() {
  return prisma.publisher.findMany({
    select: {
      id: true,
      name: true,
    },
  });
}
