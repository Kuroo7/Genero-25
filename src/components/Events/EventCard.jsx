import Link from "next/link";
import "./EventCard.css";

const EventCard = ({ propStyle, imgSrc, name, redirectLink }) => {
  return (
    <div className="main-wrapper1">
      <Link href={`/events/${redirectLink}`} passHref legacyBehavior>
        <a>
          <div className="team-card" style={propStyle}>
            <div className="bg-img1">
              <img src={imgSrc} alt={name} />
            </div>
            <div className="info1">
              <h2>{name}</h2>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default EventCard;
