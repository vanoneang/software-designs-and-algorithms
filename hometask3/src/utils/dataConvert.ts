import type { Row } from "../components";
import type { Image, User, Account } from '../../types';

export const dataConverter = (
  users: User[],
  accounts: Account[],
  images: Image[]
): Row[] => {
  return users.map(user => {
    const imageService = images.find(image => image.userID === user.userID);
    const accountService = accounts.find(account => account.userID === user.userID);

    return {
      avatar: imageService.url,
      username: user.username,
      country: user.country,
      name: user.name,
      lastPayments: accountService.payments[0]?.totalSum || 0,
      posts: accountService.posts
    }
  });
};

