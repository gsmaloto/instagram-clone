import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import { Box, Stack, Typography } from "@mui/material";

const Story = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("https://randomuser.me/api/?results=20");
      const data = await res.json();
      setUsers(data.results);
      console.log(data.results);
    };
    fetchUsers();
  }, []);

  return (
    <Stack
      className="stories"
      direction="row"
      alignItems="center"
      gap={2}
      sx={{
        overflowY: "hidden",
        maxWidth: "470px",
        p: 1.5,
        border: "1px solid #00000030",
      }}
    >
      {users.map((user, index) => (
        <Stack alignItems="center" gap={1} key={index}>
          <Avatar
            src={user.picture.large}
            sx={{
              width: "66px",
              height: "66px",
              border: "3px solid transparent",
              outline: "3px solid #db0f31",
            }}
          />
          <Typography variant="caption">
            {user.name.last.concat(user.name.first).slice(0, 7)}...
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
};

export default Story;

// {
//   "gender": "male",
//   "name": {
//       "title": "Mr",
//       "first": "آرش",
//       "last": "رضایی"
//   },
//   "location": {
//       "street": {
//           "number": 7219,
//           "name": "میدان قیام"
//       },
//       "city": "آمل",
//       "state": "کرمان",
//       "country": "Iran",
//       "postcode": 58175,
//       "coordinates": {
//           "latitude": "72.8037",
//           "longitude": "164.3693"
//       },
//       "timezone": {
//           "offset": "+10:00",
//           "description": "Eastern Australia, Guam, Vladivostok"
//       }
//   },
//   "email": "arsh.rdyy@example.com",
//   "login": {
//       "uuid": "611bd116-33e3-4b84-8911-2fbc0d8672ad",
//       "username": "tinybird111",
//       "password": "super1",
//       "salt": "AEjNYXqq",
//       "md5": "c4f44525618b73db3debeccac7863311",
//       "sha1": "55d08c73c0a8484e10048ed04d53ce36f2606423",
//       "sha256": "4c30e8500fbab016f28b0896f24b8c80c2b6bc2fffa0535c6f8d7dcd3771c623"
//   },
//   "dob": {
//       "date": "1998-01-13T15:38:30.738Z",
//       "age": 24
//   },
//   "registered": {
//       "date": "2005-03-28T04:17:29.259Z",
//       "age": 17
//   },
//   "phone": "001-39875300",
//   "cell": "0912-704-2785",
//   "id": {
//       "name": "",
//       "value": null
//   },
//   "picture": {
//       "large": "https://randomuser.me/api/portraits/men/90.jpg",
//       "medium": "https://randomuser.me/api/portraits/med/men/90.jpg",
//       "thumbnail": "https://randomuser.me/api/portraits/thumb/men/90.jpg"
//   },
//   "nat": "IR"
// }
