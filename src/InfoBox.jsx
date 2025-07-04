import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";


export default function InfoBox({info}){
const HOT_URL="https://plus.unsplash.com/premium_photo-1733306531071-087c077e1502?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHN1bW1lciUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
const COLD_URL="https://plus.unsplash.com/premium_photo-1670493556860-13e006e6faa4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2ludGVyfGVufDB8fDB8fHww";
const RAIN_URL="https://images.unsplash.com/photo-1610741083757-1ae88e1a17f7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";


    return (
        <div className="InfoBox">
          
                <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={ info.humidity>80? RAIN_URL : info.temp>15? HOT_URL : COLD_URL}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {info.city} {
                             info.humidity>80? <ThunderstormIcon/> : info.temp>15? <WbSunnyIcon/> : <AcUnitIcon/>
                        }
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}> 
                        <p>Temperature: {info.temp}&deg;C</p>
                        <p>Humidity: {info.humidity}&deg;C</p>
                        <p>Min Temp: {info.tempMin}&deg;C</p>
                        <p>Max Temp: {info.tempMax}&deg;C</p>
                        <p>The weather can be described as <i>{info.weather}</i>  and feels like {info.feelsLike}&deg;C</p>
                        </Typography>
                    </CardContent>
                    </Card>
                </div>
           
        </div>
    )
}