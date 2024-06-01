import { Client, Account, Databases, Query } from 'appwrite'

export const client = new Client()

const {
  NEXT_PUBLIC_APPWRITE_ENDPOINT,
  NEXT_PUBLIC_APPWRITE_PROJECT_ID,
  NEXT_PUBLIC_APPWRITE_DATABASE_ID,
} = process.env

client
  .setEndpoint(NEXT_PUBLIC_APPWRITE_ENDPOINT as string)
  .setProject(NEXT_PUBLIC_APPWRITE_PROJECT_ID as string)

export const account = new Account(client)
export const databases = new Databases(client)
export { ID } from 'appwrite'

export const getPage = async (key: string) => {
  try {
    const response = await databases.listDocuments(
      NEXT_PUBLIC_APPWRITE_DATABASE_ID as string,
      'about-us',
      [Query.equal('slug', key)]
    )

    return response
  } catch (error) {
    throw error
  }
}

export const getShorts = async (key: string) => {
  try {
    const response = await databases.listDocuments(
      NEXT_PUBLIC_APPWRITE_DATABASE_ID as string,
      'short',
      [Query.equal('slug', key)]
    )

    return response
  } catch (error) {
    throw error
  }
}

export const getCoreValues = async () => {
  try {
    const response = await databases.listDocuments(
      NEXT_PUBLIC_APPWRITE_DATABASE_ID as string,
      'core-values'
    )

    return response
  } catch (error) {
    throw error
  }
}

export const getDonors = async () => {
  try {
    const response = await databases.listDocuments(
      NEXT_PUBLIC_APPWRITE_DATABASE_ID as string,
      'donors'
    )

    return response
  } catch (error) {
    throw error
  }
}

export const getAddress = async () => {
  try {
    const response = await databases.listDocuments(
      NEXT_PUBLIC_APPWRITE_DATABASE_ID as string,
      'address'
    )

    return response
  } catch (error) {
    throw error
  }
}

export const getThematicAreas = async () => {
  try {
    const response = await databases.listDocuments(
      NEXT_PUBLIC_APPWRITE_DATABASE_ID as string,
      'thematic-ares'
    )

    return response
  } catch (error) {
    throw error
  }
}

export const getThematicAreasBySlug = async (slug: string) => {
  try {
    const response = await databases.listDocuments(
      NEXT_PUBLIC_APPWRITE_DATABASE_ID as string,
      'thematic-ares',
      [Query.equal('slug', slug)]
    )

    return response
  } catch (error) {
    throw error
  }
}

export const getProjects = async () => {
  try {
    const response = await databases.listDocuments(
      NEXT_PUBLIC_APPWRITE_DATABASE_ID as string,
      'projects'
    )

    return response
  } catch (error) {
    throw error
  }
}

export const getProjectsBySlug = async (slug: string) => {
  try {
    const response = await databases.listDocuments(
      NEXT_PUBLIC_APPWRITE_DATABASE_ID as string,
      'projects',
      [Query.equal('slug', slug)]
    )

    return response
  } catch (error) {
    throw error
  }
}

export const getKeyAchievements = async () => {
  try {
    const response = await databases.listDocuments(
      NEXT_PUBLIC_APPWRITE_DATABASE_ID as string,
      'key-achievement'
    )

    return response
  } catch (error) {
    throw error
  }
}

export const getKeyAchievementsBySlug = async (slug: string) => {
  try {
    const response = await databases.listDocuments(
      NEXT_PUBLIC_APPWRITE_DATABASE_ID as string,
      'key-achievement',
      [Query.equal('slug', slug)]
    )

    return response
  } catch (error) {
    throw error
  }
}
