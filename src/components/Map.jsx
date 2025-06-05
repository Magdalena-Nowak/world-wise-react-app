import { useSearchParams, useNavigate } from "react-router-dom";
import styles from "./Map.module.css";

function Map() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  console.log("Latitude:", lat, "Longitude:", lng);
  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      <h2>Map Component</h2>
      {/* Map display goes here */}
    </div>
  );
}

export default Map;
