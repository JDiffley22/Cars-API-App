import React from "react"
import { Link } from "react-router-dom";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Typography from "@mui/material/Typography";

function CarsList() {
  const cars = [
    {
      _id: 1,
      name: 'Ferrari',
      bhp: 1234,
      avatar_url: "https://www.thecarexpert.co.uk/wp-content/uploads/2019/04/200083-car-ferrari-portofino-m-1920x960.jpeg.webp"
    },
    {
      _id: 2,
      name: 'Bugatti',
      bhp: 1999,
      avatar_url: "https://newsroomcdn.bugatti.com/w_3200/s3-newsroom-bugatti/fba83c23-536b-476f-8fce-3f6e7e8977e1.jpg"
    }
  ];

  return (
    <>
      <Typography variant="h3" component="h2">
        Cars
      </Typography>
      <List>
        {cars.map(({ name, bhp, avatar_url, _id }, i) => (
          <ListItem key={i}>
            <ListItemAvatar>
              <Avatar alt="" src={avatar_url} />
            </ListItemAvatar>
            <ListItemText>
              {name} (BHP: {bhp})
            </ListItemText>
            <IconButton
              aria-label="update"
              to={`/update/${_id}`}
              component={Link}
            >
              <EditIcon />
            </IconButton>
            <IconButton aria-label="delete" onClick={() => console.log(`Delete ${_id}`)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default CarsList;