import Card from "./components/card/Card";
import { CARDS } from "./constants/cards";


const App = () => {

	return(
		
		<div className="container">

			{CARDS.map((card)=> (
				<Card
					key={card.id}
					src={card.src}
					alt={card.alt}
					color={card.color}
					title={card.title}
					text={card.text}
				/>
			))};

		</div>
	);

};

export default App;
