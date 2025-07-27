import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FaArrowTrendUp } from "react-icons/fa6";

const CircularProgress = ({ score = 0, desc = 0, title = "Score" }) => {
  return (
    <div className="relative w-[152px] h-[152px]">
      <CircularProgressbar
        value={score}
        maxValue={100}
        text={""}
        strokeWidth={14}
        styles={buildStyles({
          pathColor: "#11B347",
          trailColor: "#EFEFEF",
          textColor: "transparent",
          textSize: "0px",
          strokeLinecap: "round",
        })}
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center space-y-1/2">
        <p className="text-sm text-gray-400">{title}</p>
        <p className="text-[28px] font-bold text-gray-900">
          {typeof score === "number" ? score.toFixed(1).replace(".", ",") : "-"}
        </p>
        {desc !== undefined && (
          <div className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full font-semibold flex items-center gap-1">
            +{desc} <FaArrowTrendUp size={12} />
          </div>
        )}
      </div>
    </div>
  );
};

export default CircularProgress;
