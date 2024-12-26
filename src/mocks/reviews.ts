import { Review } from '../types/types';

export const REVIEWS_DATA: Review[] = [
  {
    id: '31af6f711-c28d-4121-82cd-e0b462a27f00',
    date: '2019-05-08T14:13:56.569Z',
    user: {
      name: 'Oliver Conner',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: false,
    },
    comment:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 4,
  },
  {
    id: '41af6f711-c28d-4121-82cd-e0b462a27f00',
    date: '2019-10-08T14:13:56.569Z',
    user: {
      name: 'Mike Kann',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: true,
    },
    comment: 'A quiet cozy and picturesque  lightness of Amsterdam.',
    rating: 2,
  },
];
