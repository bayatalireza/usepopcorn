import Star from "../components/star/Star";
import { useState } from "react";

const styleContainer = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};
const styleStarContainer = {
  display: "flex",
  gap: "4px",
};

export default function StarRating({
  starNum = 5,
  color = "#fcc419",
  size = "20px",
  messages = [],
  defaultRating = 0,
  onUserRating
}) {
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(defaultRating);

  const handleRating = (rating) => {
    setRating(rating);
    onUserRating(rating);
  };
  const styleText = {
    lineHeight: "1",
    margin: "0",
    color: color,
    fontSize: `${size}`,
  };
  return (
    <div style={styleContainer}>
      <div style={styleStarContainer}>
        {Array.from({ length: starNum }, (_, i) => (
          <Star
            key={i}
            onRating={() => handleRating(i + 1)}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            color={color}
            size={size}
          />
        ))}
      </div>
      <p style={styleText}>
        {messages.length === starNum
          ? messages[tempRating ? tempRating - 1 : rating - 1]
          : tempRating || rating || ""}
      </p>
    </div>
  );
}
