import { isWithinInterval, subWeeks } from "date-fns"

export const bearWasSeenWithinLastweek = (createdAt: Date) => {
  return isWithinInterval(new Date(createdAt), {
    start: subWeeks(new Date(), 1),
    end: new Date(),
  })
}
