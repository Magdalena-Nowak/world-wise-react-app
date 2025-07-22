import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import CountryItem from "./CountryItem";
import Message from "./Message";
import {useCities} from '../contexts/CitiesContext.jsx';

const message = "Add your first city by clicking on a city on the map";

export default function CountryList() {
  const {cities, isLoading} = useCities();
  if (isLoading) return <Spinner />;
  if (!cities || !cities.length) {
    return <Message message={message} />;
  }

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country)) {
      return [
        ...arr,
        { country: city.country, id: city.id, emoji: city.emoji },
      ];
    } else return arr;
  }, []);

  return (
    <div>
      <ul className={styles.countryList}>
        {countries.map((country) => (
          <CountryItem key={country.id} country={country} />
        ))}
      </ul>
    </div>
  );
}
