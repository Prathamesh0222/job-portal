import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const JobRow = () => {
  return (
    <div>
      <div className="bg-neutral-900 p-4 shadow-sm rounded-lg relative">
        <div className="absolute top-4 cursor-pointer right-4">
        <FontAwesomeIcon className="size-4 text-slate-300" icon={faHeart} />
        </div>
        <div className="flex grow gap-4">
          <div>
            <img
              src="https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png"
              alt="Icon"
              className="size-12"
            />
          </div>
          <div className="md:flex grow">
            <div className="grow">
            <div className="text-slate-400 text-sm">Spotify</div>
            <div className="font-bold text-lg mb-1">Product Designer</div>
            <div className="text-slate-500 text-sm">
              Remote &middot; New York, US &middot; Full-time
            </div>
            </div>
            <div className="content-end text-slate-400 text-sm">
              2 weeks ago
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobRow;
