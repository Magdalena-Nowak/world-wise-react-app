import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import CityItem from "./CityItem";
import Message from "./Message";

const message = "Add your first city by clicking on a city on the map";

export default function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;
  if (!cities || !cities.length) {
    return <Message message={message} />;
  }
  return (
    <div>
      <ul className={styles.cityList}>
        {cities.map((city) => (
          <CityItem key={city.id} city={city} />
        ))}
      </ul>
    </div>
  );
}
