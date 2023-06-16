import { User } from './users.model'

export const findlastUserId = async () => {
  const lastUser = await User.findOne(
    {},
    {
      id: 1,
      _id: 0,
    }
  )
    .sort({
      createdAt: 1,
    })
    .lean()
  return lastUser?.id
}

export const generateUserId = async () => {
  const currentUserId = (await findlastUserId()) || String(0).padStart(5, '0')
  return currentUserId
}
