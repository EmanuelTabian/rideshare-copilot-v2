import { useGetCarPost } from "../features/carposts/useGetCarPost";
import { dateFormatter } from "../utils/helpers";
import ImgSlider from "./ImgSlider";
import Spinner from "./Spinner";

function CarPost({ carPost }) {
  const {
    created_at: createdAt,
    car_name: carName,
    body,
    color,
    description,
    door_number: doorNumber,
    emission_standard: emissionStandard,
    engine,
    fuel,
    gear_number: gearNumber,
    image,
    location,
    milleage,
    model,
    mpg,
    phone_number: phoneNumber,
    power,
    price,
    seat_number: seatNumber,
    transmission,
    version,
    year,
  } = carPost;

  return (
    <>
      <ImgSlider />
      <div>Description: {description}</div>
      <span>{dateFormatter(createdAt)}</span>
      <span>{location}</span>
      <h1>Car Specs</h1>
      <div>
        <ul>
          <li>Name: {carName}</li>
          <li>Model: {model}</li>
          <li>Version: {version}</li>
          <li>Year: {year}</li>
          <li>Engine: {engine}</li>
          <li>Fuel: {fuel}</li>
          <li>Body: {body}</li>
          <li>Transmission: {transmission}</li>
          <li>Gears: {gearNumber}</li>
          <li>Color: {color}</li>
          <li>Seats: {seatNumber}</li>
          <li>Doors: {doorNumber}</li>
          <li>Milleage: {milleage} km</li>
          <li>Power: {power} CP</li>
          <li>Mpg: {mpg}</li>
          <li>Price: {price}</li>
          <li>Emmision Standard: {emissionStandard}</li>
        </ul>
        <div>
          <span>{phoneNumber}</span>
          <button>Reveal phone number</button>
        </div>
      </div>
    </>
  );
}

export default CarPost;
