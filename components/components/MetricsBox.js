import { degToCompass } from "../services/converters";
import {
  getTime,
  getAMPM,
  getVisibility,
  getWindSpeed,
} from "../services/helpers";
import { MetricsCard } from "./MetricsCard";
import styles from "./MetricsBox.module.css";

export const MetricsBox = ({ weatherData, unitSystem }) => {
  return (
    <div className={styles.wrapper}>
      <MetricsCard
        title={"Humidity"}
        // iconSrc={"/icons/humidity.png"}
        metric={weatherData.main.humidity}
        unit={"%"}
      />
      <MetricsCard
        title={"Wind speed"}
        // iconSrc={"/icons/wind.png"}
        metric={getWindSpeed(unitSystem, weatherData.wind.speed)}
        unit={unitSystem == "metric" ? "m/s" : "m/h"}
      />
      <MetricsCard
        title={"Wind direction"}
        // iconSrc={"/icons/compass.png"}
        metric={degToCompass(weatherData.wind.deg)}
      />


    </div>
  );
};
