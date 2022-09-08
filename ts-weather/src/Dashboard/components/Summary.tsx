import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { faker } from "@faker-js/faker";
import "./css/Summary.css";
import moment from "moment";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  maintainAspectRatio: false,
  relative: false,
};

const labels = [3, 2, 1, 0].map((subtraction) =>
  moment().subtract(subtraction, "month").startOf("month").format("MMMM")
);

export const data = {
  labels,
  datasets: [
    {
      label: "Completed",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      backgroundColor: "rgba(49, 220, 46, 1)",
    },
    {
      label: "Passed term",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      backgroundColor: "rgba(220, 46, 51, 1)",
    },
    {
      label: "Uncompleted",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      backgroundColor: "rgba(214, 214, 36, 1)",
    },
  ],
};

function Summary() {
  return (
    <div className="Summary">
      <h2>Summary</h2>
      <div className="chart">
        <Bar
          style={{ width: "490px", height: "300px" }}
          options={options}
          data={data}
        />
      </div>
    </div>
  );
}

export default Summary;
