import Link from "next/link";
import "./EventCard.css";

const EventCard = ({name, redirectLink }) => {
  return (
    <div className="main-wrapper1">
      <Link href={`/events/${redirectLink}`}>
       
          <div className="team-card">
            {/* <div className="bg-img1"> */}
              {/* <img src="../innerCard.png" alt={name} /> */}
            {/* </div> */}
            <div className="info1">
              <h2>{name}</h2>
            </div>
          </div>
      </Link>
    </div>
  );
};

export default EventCard;
