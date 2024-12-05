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
  const [tempRating, setTempRating] = useState(0)

  const handleRating = (rating)=>{
    setRating(rating)
  }
  return (
    <div style={styleContainer}>
      <div style={styleStarContainer}>
        {Array.from({length: starNum},(_, i) => (
          <Star key={i} 
          onRating={()=>handleRating(i+1)} 
          onHoverIn={()=>setTempRating(i+1)}
          onHoverOut={()=>setTempRating(0)}
          full={tempRating ? tempRating>=i+1 : rating>= i+1} />
        ))}
      </div>
      <p style={styleText}>{tempRating || rating || ''}</p>
    </div>
  );
}
