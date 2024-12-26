import type { Review } from '../../types/types';
import ReviewItem from '../ReviewItem/ReviewItem';

type ReviewsListProps = {
  reviewsList: Review[];
};
function ReviewsList({ reviewsList }: ReviewsListProps) {
  return (
    <ul className="reviews__list">
      {reviewsList &&
        reviewsList.map((item) => <ReviewItem key={item.id} review={item} />)}
    </ul>
  );
}

export default ReviewsList;
