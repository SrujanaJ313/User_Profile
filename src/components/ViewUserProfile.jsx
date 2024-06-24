// import React from 'react'
// import { useEffect } from 'react'
// import { useState } from 'react'
// import { Button, Card, CardBody, CardFooter, Col, Container, Row, Table } from 'reactstrap'
// import { getCurrentUserDetail, isLoggedIn } from '../auth'
// const ViewUserProfile = ({ user, updateProfileClick }) => {

//     const [currentUser, setCurrentUser] = useState(null)
//     const [login, setLogin] = useState(false)
//     useEffect(() => {
//         setCurrentUser(getCurrentUserDetail())
//         setLogin(isLoggedIn())
//     }, [])
//     return (
//         <Card className='mt-2 border-0 rounded-0 shadow-sm'>
//             <CardBody>
//                 <h3 className='text-uppercase'>user Information</h3>

//                 <Container className='text-center'>
//                     <img style={{ maxWidth: '200px', maxHeight: '200px' }} src={user.image ? user.image : 'https://cdn.dribbble.com/users/6142/screenshots/5679189/media/1b96ad1f07feee81fa83c877a1e350ce.png?compress=1&resize=400x300&vertical=top'} alt="user profile picture" className='img-fluid  rounded-circle' />
//                 </Container>
//                 <Table responsive striped hover bordered={true} className='text-center mt-5'>
//                     <tbody>
//                         <tr>
//                             <td >
//                                 LCWDBlLOGS ID
//                             </td>
//                             <td>
//                                 LCWD{user.id}
//                             </td>
//                         </tr>
//                         <tr>
//                             <td >
//                                 USER NAME
//                             </td>
//                             <td>
//                                 {user.name}
//                             </td>
//                         </tr>
//                         <tr>
//                             <td >
//                                 USER EMAIL
//                             </td>
//                             <td>
//                                 {user.email}
//                             </td>
//                         </tr>
//                         <tr>
//                             <td >
//                                 ABOUT
//                             </td>
//                             <td>
//                                 {user.about}
//                             </td>

//                         </tr>
//                         <tr>
//                             <td>
//                                 ROLE
//                             </td>
//                             <td>
//                                 {user.roles.map((role) => {
//                                     return (
//                                         <div key={role.id}>{role.name}</div>
//                                     )
//                                 })}
//                             </td>
//                         </tr>
//                     </tbody>
//                 </Table>

//                 {currentUser ? (currentUser.id == user.id) ? (
//                     <CardFooter className='text-center'>
//                         <Button onClick={updateProfileClick} color='warning' >Update Profile</Button>
//                     </CardFooter>
//                 ) : '' : ''}

//             </CardBody>
//         </Card>

//     )
// }
import React, { useState } from "react";
// import React, { useState, useEffect } from "react";
import {
  Container,
  Card,
  CardContent,
  CardActions,
  Typography,
  Avatar,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from "@mui/material";
import { useLocation } from "react-router-dom";
// import jwt from "jsonwebtoken";
// const useQuery = () => {
//   return new URLSearchParams(useLocation().search);
// };

const ViewUserProfile = ({ user, updateProfileClick }) => {
  const [avatar, setAvatar] = useState(
    user.image ||
      "https://cdn.dribbble.com/users/6142/screenshots/5679189/media/1b96ad1f07feee81fa83c877a1e350ce.png?compress=1&resize=400x300&vertical=top"
  );
  const [currentUser, setCurrentUser] = useState(null);
  // const query = useQuery();
  // const token = query.get("token");
  // const secretKey = "your_secret_key";
  // console.log("token received---->", token);

  // useEffect(() => {
  //   if (token) {
  //     try {
  //       const decoded = jwt.verify(token, secretKey);
  //       setUser(decoded);
  //     } catch (error) {
  //       console.error("Invalid token", error);
  //     }
  //   }
  // }, [token]);
  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setAvatar(e.target.result);
      reader.readAsDataURL(file);
    }
  };
  if (!user) {
    window.open('http://localhost:3000/')
    return;
    // return <div>Unauthorized Access</div>;
  }

  return (
    <Card className="mt-2" sx={{ border: 0, borderRadius: 0, boxShadow: 1 }}>
      <CardContent>
        <Typography variant="h5" component="h3" className="text-uppercase">
          User Information
        </Typography>
        <Container sx={{ textAlign: "center" }}>
          <input
            accept="image/*"
            style={{ display: "none" }}
            id="avatar-upload"
            type="file"
            onChange={handleAvatarChange}
          />
          <label htmlFor="avatar-upload">
            <Avatar
              src={avatar}
              alt="user profile picture"
              sx={{
                width: 200,
                height: 200,
                cursor: "pointer",
                margin: "auto",
              }}
            />
          </label>
        </Container>
        <Table
          responsive="true"
          striped="true"
          hover="true"
          bordered="true"
          className="text-center mt-5"
        >
          <TableBody>
            {/* <TableRow>
              <TableCell>LCWDBlLOGS ID</TableCell>
              <TableCell>LCWD{user.id}</TableCell>
            </TableRow> */}
            <TableRow>
              <TableCell>USER NAME</TableCell>
              <TableCell>{user.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>USER EMAIL</TableCell>
              <TableCell>{user.email}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>ABOUT</TableCell>
              <TableCell>{user.about}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>ROLE</TableCell>
              <TableCell>
                {user.roles.map((role) => (
                  <div key={role.id}>{role.name}</div>
                ))}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        {currentUser && currentUser.id === user.id && (
          <CardActions sx={{ justifyContent: "center" }}>
            <Button onClick={updateProfileClick} color="warning">
              Update Profile
            </Button>
          </CardActions>
        )}
      </CardContent>
    </Card>
  );
};

export default ViewUserProfile;
