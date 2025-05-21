import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
export default function InfoBox({ info }) {
    const RAINY_URL =
        "https://images.unsplash.com/photo-1714512719770-15b482708f4f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const HOT_URL =
        "https://i.pinimg.com/736x/12/0d/30/120d302024f0f431c6e1880054cda987.jpg";

    const COLD_URL =
        "https://plus.unsplash.com/premium_photo-1673859055803-593f6cda5e2b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (
        <div className="InfoBox">
            <div className="CardContainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={
                            info.humidity > 80
                                ? RAINY_URL
                                : info.temp < 25
                                ? COLD_URL
                                : HOT_URL
                        }
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city } {
                            info.humidity > 80
                                ? <ThunderstormIcon/>
                                : info.temp < 25
                                ? <AcUnitIcon/>
                                : <WbSunnyOutlinedIcon/>
                        }
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ color: "text.secondary" }}
                            component={"span"}
                            >
                            <p>Temperature = {info.temp}&deg;C</p>
                            
                            <p>humidity = {info.humidity}</p>
                            <p>Maximum Temperature = {info.tempMAX}&deg;C</p>
                            <p>Minimum Temperature = {info.tempMIN}&deg;C</p>
                            <p>
                                Weather can be described as{" "}
                                <i>{info.weather}</i> feels like and{" "}
                                {info.feelsLike}&deg;C
                            </p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
