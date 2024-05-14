// common styles
import "./assets/styles.scss";
// components
import { CardsList } from "./components/cardsList/CardsList";
// props
import { cardsList } from "./services/mockData/cardsList";

function App() {
  return <CardsList title="Замечания и рекомендации" cards={cardsList} />;
}

export default App;
