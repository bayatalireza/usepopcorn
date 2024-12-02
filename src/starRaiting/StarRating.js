import Star from "../components/star/Star";
import{useState} from 'react';


const styleContainer ={
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
}
const styleStarContainer = {
      display: 'flex',
      gap: '4px'
}
const styleText = {
      lineHeight: "1",
      margin: '0'
}

export default function StarRating({starNum = 5}) {
  const [rating, setRating] = useState(0)

  const handleRating = (rating)=>{
    setRating(rating)
  }
  return (
    <div style={styleContainer}>
      <div style={styleStarContainer}>
        {Array.from({length: starNum},(_, i) => (
          <Star key={i} onRating={rating=>handleRating(i+1)} full={rating>= i+1} />
        ))}
      </div>
      <p style={styleText}>{rating || ''}</p>
    </div>
  );
}
