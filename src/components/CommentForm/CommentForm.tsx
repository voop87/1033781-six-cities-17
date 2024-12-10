import { ChangeEvent, useState } from 'react';

type CommentFormData = {
  rating: number | null;
  review: string;
};

function CommentForm() {
  const initialState: CommentFormData = {
    rating: null,
    review: '',
  };
  const [formData, setFormData] = useState(initialState);
  const [isSubmitBtnDisabled, setIsSubmitBtnDisabled] = useState(true);

  function onInputChangeHandle(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    inputName: keyof CommentFormData
  ) {
    setFormData((prev) => ({
      ...prev,
      [inputName]:
        inputName === 'rating' ? Number(e.target.value) : e.target.value,
    }));

    if (formData.review.length > 50 && formData.review.length < 300) {
      setIsSubmitBtnDisabled(false);
    }
  }

  function onFormSubmitHandle(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormData(initialState);
  }

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={(e) => onFormSubmitHandle(e)}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="5"
          id="5-stars"
          type="radio"
          onChange={(e) => onInputChangeHandle(e, 'rating')}
        />
        <label
          htmlFor="5-stars"
          className="reviews__rating-label form__rating-label"
          title="perfect"
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="4"
          id="4-stars"
          type="radio"
          onChange={(e) => onInputChangeHandle(e, 'rating')}
        />
        <label
          htmlFor="4-stars"
          className="reviews__rating-label form__rating-label"
          title="good"
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="3"
          id="3-stars"
          type="radio"
          onChange={(e) => onInputChangeHandle(e, 'rating')}
        />
        <label
          htmlFor="3-stars"
          className="reviews__rating-label form__rating-label"
          title="not bad"
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="2"
          id="2-stars"
          type="radio"
          onChange={(e) => onInputChangeHandle(e, 'rating')}
        />
        <label
          htmlFor="2-stars"
          className="reviews__rating-label form__rating-label"
          title="badly"
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="1"
          id="1-star"
          type="radio"
          onChange={(e) => onInputChangeHandle(e, 'rating')}
        />
        <label
          htmlFor="1-star"
          className="reviews__rating-label form__rating-label"
          title="terribly"
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={(e) => onInputChangeHandle(e, 'review')}
        value={formData.review}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isSubmitBtnDisabled}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default CommentForm;
