import React, {useContext, useEffect} from "react"
import Typography from "@mui/material/Typography";

import { CarsContext } from "../components/contexts/car.context.jsx";
import CarsList from "../components/CarsList.jsx";

function CarsListPage() {
const {cars, fetchCars, deleteCar} = useContext(CarsContext);

useEffect (()=>{
  fetchCars();
}, [fetchCars]);

const deleteHandler = (id) => {
  deleteCar(id);
}

  return (
    <>
      <Typography variant="h3" component="h2">
        Cars
      </Typography>
     <CarsList cars={cars} deleteHandler={deleteHandler} />

    </>
  );
}

export default CarsListPage;