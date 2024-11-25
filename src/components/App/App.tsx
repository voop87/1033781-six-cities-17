import MainPage from '../../pages/MainPage/MainPage';
import { PlaceCardType } from '../../types/types';

type AppScreenProps = {
  placeCardList: PlaceCardType[];
};

function App({ placeCardList }: AppScreenProps) {
  return <MainPage placeCardList={placeCardList} />;
}

export default App;
