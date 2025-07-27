import { FaShare } from "react-icons/fa6";
import { SuccessIcon, BadgeIcon } from "./assets/icons";
import CircularProgress from "./components/CircularProgress";

const HasilPenilaian = () => {
  const dataScore = { score: 84.4, desc: 12 };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-xl font-bold mb-2">Hasil Penilaian</div>

        {/* Main Container */}
        <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative">
          {/* Main Content Header */}
          <div className="flex items-center justify-between border-b border-gray-200 pb-3 mb-4">
            <p className="text-base font-semibold text-gray-800">
              24 Juli 2025
            </p>
            <button className="flex items-center gap-1 text-orange-500 hover:text-orange-600 text-sm font-semibold">
              Bagikan
              <FaShare />
            </button>
          </div>

          <div className="flex items-start gap-6">
            {/* Diagram */}
            <div className="flex-shrink-0">
              <CircularProgress
                score={dataScore.score}
                desc={dataScore.desc}
                title={"Score"}
              />
            </div>

            <div className="flex-1 space-y-4">
              {/* Nilai */}
              <div className="flex items-center border-l-4 border-green-300 bg-green-50 p-4 rounded-md">
                <div>
                  <p className="text-sm text-gray-600">Nilai</p>
                  <div className="flex items-center mt-1">
                    <img
                      src={SuccessIcon}
                      alt="Success"
                      className="w-5 h-5 mr-2"
                    />
                    <p className="font-semibold text-gray-800">Sangat Baik</p>
                  </div>
                </div>
              </div>

              {/* Level Tahsin */}
              <div className="flex items-center border-l-4 border-orange-300 bg-orange-50 p-4 rounded-md">
                <div>
                  <p className="text-sm text-gray-600">Level Tahsin</p>
                  <div className="flex items-center mt-1">
                    <img src={BadgeIcon} alt="Badge" className="w-5 h-5 mr-3" />

                    <p className="font-semibold text-gray-800">
                      Kelas <span className="font-bold">3B</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Info Box */}
          <div className="bg-blue-100 text-blue-800 text-sm rounded-md p-3 mt-4">
            Alhamdulillah, dari hasil rekomendasi, Sahabat berada di{" "}
            <strong>Level Tahsin 3B</strong>
          </div>

          {/* CTA Buttons */}
          <div className="flex space-x-4 mt-6">
            <button className="flex-1 bg-orange-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-orange-600">
              Ikut Kelas Tashin
            </button>
            <button className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-lg font-semibold">
              More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HasilPenilaian;
