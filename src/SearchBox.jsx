import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import "./SearchBox.css";

const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "dd3d3cecced243a6310ee2f541bb525e";

export default function SearchBox({ updateInfo }) {
    const [city, setCity] = useState("");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const getWeatherInfo = async () => {
        const response = await fetch(
            `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
        );

        const data = await response.json();

        if (!response.ok) {
            throw new Error("City not found");
        }

        return {
            city: city
                .toLowerCase()
                .split(" ")
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" "),
            temp: data.main.temp,
            tempMin: data.main.temp_min,
            tempMax: data.main.temp_max,
            humidity: data.main.humidity,
            feelsLike: data.main.feels_like,
            weather: data.weather[0].description,
        };
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const newInfo = await getWeatherInfo();
            updateInfo(newInfo);
            setError(false);
            setCity("");
        } catch {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="SearchBox">
            <Card
                sx={{
                    maxWidth: 345,
                    margin: "0 auto 1px",
                    borderRadius: 3,
                    boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
                }}
            >
                <CardContent sx={{ paddingBottom: 1 }}>
                    <form onSubmit={handleSubmit}>
                        <p className="searchHint">Check current weather instantly</p>

                        <TextField
                            fullWidth
                            label="Enter city name"
                            size="small"
                            required
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            sx={{ mb: 1.5 }}
                        />

                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            disabled={loading}
                            sx={{
                                mt: 1.5,
                                py: 0.9,
                                textTransform: "none",
                                fontWeight: 500,
                                borderRadius: "8px",
                            }}
                        >
                            {loading ? "Fetching weather..." : "Search Weather"}
                        </Button>

                        {error && (
                            <p style={{ color: "red", marginTop: 10, fontSize: 14 }}>
                                No such place exists
                            </p>
                        )}
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
