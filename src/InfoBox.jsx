import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import "./InfoBox.css";

const HOT_URL = "https://plus.unsplash.com/premium_photo-1733306531071-087c077e1502?w=1000&auto=format&fit=crop&q=60";
const COLD_URL = "https://plus.unsplash.com/premium_photo-1670493556860-13e006e6faa4?w=1000&auto=format&fit=crop&q=60";
const RAIN_URL = "https://images.unsplash.com/photo-1610741083757-1ae88e1a17f7?q=80&w=870&auto=format&fit=crop"

export default function InfoBox({ info }) {
    const isRainy = info.humidity > 80;
    const isHot = info.temp > 15;

    const imageUrl = isRainy ? RAIN_URL : isHot ? HOT_URL : COLD_URL;
    const WeatherIcon = isRainy ? ThunderstormIcon : isHot ? WbSunnyIcon : AcUnitIcon;

    return (
        <div className="cardContainer">
            <Card
                sx={{
                    width: 345,
                    margin: "0 auto",
                    borderRadius: 3,
                    boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
                }}
            >
                <CardMedia
                    component="img"
                    height="110"
                    image={imageUrl}
                    alt="Weather condition"
                />

                <CardContent sx={{ textAlign: "center", py: 1 }}>
                    <Typography variant="h5" fontWeight={600}>
                        {info.city} <WeatherIcon />
                    </Typography>

                    <Typography variant="h6" sx={{ mt: 0.5 }}>
                        🌡 {info.temp}°C
                    </Typography>

                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                        Feels like {info.feelsLike}°C · {info.weather}
                    </Typography>

                    <Typography variant="body2" sx={{ mt: 1.5 }}>
                        💧 Humidity: {info.humidity}% <br />
                        🔻 Min: {info.tempMin}°C <br />
                        🔺 Max: {info.tempMax}°C
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}
