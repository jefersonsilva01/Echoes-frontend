import React, { useState } from "react";
import UserService from "./services/user-service";
import AuthService from "./auth/auth-service";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { ProfileContainer } from './styles/ProfileStyle';

const Profile = (props) => {
  const [currentUser, setCurrentUser] = useState(props.loggedInUser);
  const oldUser = props.loggedInUser;
  const [showPass, setShowPass] = useState(false);
  const history = useHistory();
  const userService = new UserService();
  const authService = new AuthService();

  const updateUser = e => {
    e.preventDefault();

    const update = {}

    if (currentUser.email !== oldUser.email) update.email = currentUser.email;

    if (currentUser.password !== oldUser.password) update.password = currentUser.password;

    if (currentUser.username !== oldUser.username) update.username = currentUser.username;

    if (currentUser.imgPath !== oldUser.imgPath) update.imgPath = currentUser.imgPath;

    userService.userUpdate(currentUser._id, update)
      .then(response => {
        props.getUser(response);
        history.push("/profile");
      })
      .catch(error => console.log(error.message));
  }

  const handleChange = e => {
    let { name, value } = e.target;

    if (name === "imgName") {
      const uploadImage = new FormData();
      uploadImage.append("image", e.target.files[0])

      userService.uploadImage(uploadImage)
        .then(response => {
          if (response.secure_url) {
            setCurrentUser({ ...currentUser, imgPath: response.secure_url })
          }
        })
    }

    if (name === "password" && value === "") {
      setCurrentUser({ ...currentUser, [name]: oldUser.password })
      return;
    }

    setCurrentUser({ ...currentUser, [name]: value })
  }

  const signout = () => {
    props.getUser(false);
    authService.signout()
    history.push("/");
  }

  const deleteProfile = e => {
    e.preventDefault();
    userService.deleteUser(currentUser._id)
      .then(response => signout())
      .catch(error => console.log(error.message));
  }

  const showHidePass = () => {
    setShowPass(!showPass);
  }

  return (
    <ProfileContainer>
      <div id="profile-card">
        <form
          onSubmit={updateUser}
          encType="multipart/form-data"
        >
          <label htmlFor="imgName">
            <img src={oldUser.imgPath} alt="Profile cover" />
          </label>

          <input
            onChange={handleChange}
            accept=".png, .jpg, .jpeg"
            type="file"
            id="imgName"
            name="imgName" />

          <input
            onChange={handleChange}
            required
            type="text"
            name="username"
            value={currentUser.username} />

          <input
            onChange={handleChange}
            required
            type="email"
            name="email"
            value={currentUser.email} />

          <div>
            <input
              onChange={handleChange}
              type={showPass ? "text" : "password"}
              name="password"
              placeholder="********" />

            {
              showPass ? (
                <svg onClick={showHidePass} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M16.0001 12C16.0001 14.2091 14.2092 16 12.0001 16C9.79097 16 8.0001 14.2091 8.0001 12C8.0001 9.79086 9.79097 8 12.0001 8C14.2092 8 16.0001 9.79086 16.0001 12ZM14.0001 12C14.0001 13.1046 13.1047 14 12.0001 14C10.8955 14 10.0001 13.1046 10.0001 12C10.0001 10.8954 10.8955 10 12.0001 10C13.1047 10 14.0001 10.8954 14.0001 12Z" fill="black" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M22.6059 12.7781C22.8745 12.2893 22.8745 11.7107 22.6059 11.2219C21.5011 9.21142 18.0534 4 12.0001 4C5.94677 4 2.49915 9.21141 1.39435 11.2219C1.12571 11.7107 1.12571 12.2893 1.39435 12.7781C2.49915 14.7886 5.94677 20 12.0001 20C18.0534 20 21.5011 14.7886 22.6059 12.7781ZM20.7495 12C20.2262 11.0814 19.2538 9.61152 17.8334 8.35493C16.3304 7.02516 14.4072 6 12.0001 6C9.59298 6 7.66981 7.02516 6.16677 8.35493C4.74644 9.61152 3.77399 11.0814 3.25071 12C3.77399 12.9186 4.74644 14.3885 6.16677 15.6451C7.66981 16.9748 9.59298 18 12.0001 18C14.4072 18 16.3304 16.9748 17.8334 15.6451C19.2538 14.3885 20.2262 12.9186 20.7495 12Z" fill="black" />
                </svg>
              ) : (
                <svg onClick={showHidePass} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M3.41431 3.00005C3.02379 2.60952 2.39062 2.60952 2.0001 3.00005C1.60958 3.39057 1.60958 4.02374 2.0001 4.41426L4.63205 7.04621C2.99403 8.55552 1.92448 10.2572 1.39435 11.2219C1.12571 11.7108 1.12571 12.2893 1.39435 12.7782C2.49915 14.7886 5.94677 20.0001 12.0001 20.0001C13.7147 20.0001 15.2202 19.5819 16.5227 18.9369L19.5859 22.0001C19.9764 22.3906 20.6096 22.3906 21.0001 22.0001C21.3906 21.6095 21.3906 20.9764 21.0001 20.5858L18.2746 17.8604M3.25071 12C3.75923 11.1073 4.69194 9.69405 6.04764 8.4618L8.23423 10.6484C8.08267 11.0706 8.0001 11.5257 8.0001 12C8.0001 14.2092 9.79096 16.0001 12.0001 16.0001C12.4745 16.0001 12.9295 15.9175 13.3518 15.7659L15.0097 17.4239C14.104 17.7849 13.1028 18.0001 12.0001 18.0001C9.59297 18.0001 7.66981 16.9749 6.16676 15.6451C4.74644 14.3885 3.77399 12.9187 3.25071 12Z" fill="black" />
                  <path d="M3.41431 3.00005L6.21165 5.79738L3.41431 3.00005Z" fill="black" />
                  <path d="M6.21165 5.79738L7.65919 7.24486L6.21165 5.79738Z" fill="black" />
                  <path d="M16.842 16.4278L18.2746 17.8604L16.842 16.4278Z" fill="black" />
                  <path d="M15.9396 12.6969L11.3033 8.06053C11.5296 8.02078 11.7624 8.00005 12.0001 8.00005C14.2092 8.00005 16.0001 9.79091 16.0001 12C16.0001 12.2377 15.9794 12.4706 15.9396 12.6969Z" fill="black" />
                  <path d="M18.3767 15.1339C19.5046 14.0071 20.2958 12.7964 20.7495 12C20.2262 11.0814 19.2538 9.61157 17.8334 8.35498C16.3304 7.0252 14.4072 6.00005 12.0001 6.00005C11.1401 6.00005 10.3419 6.1309 9.60251 6.35975L8.04522 4.80245C9.21217 4.30774 10.5292 4.00004 12.0001 4.00004C18.0534 4.00004 21.501 9.21146 22.6058 11.2219C22.8745 11.7108 22.8745 12.2893 22.6058 12.7782C22.1228 13.6573 21.1918 15.1483 19.7909 16.5481L18.3767 15.1339Z" fill="black" />
                </svg>
              )
            }
          </div>

          {
            (currentUser.email !== oldUser.email ||
              currentUser.username !== oldUser.username ||
              currentUser.password !== oldUser.password ||
              currentUser.imgPath !== oldUser.imgPath) &&
              currentUser.email &&
              currentUser.username &&
              currentUser.imgPath &&
              currentUser.password.length >= 8 ? (
              <button name="submit" type="submit">Update</button>
            ) : (
              <button name="submit" type="submit" disabled>Update</button>
            )
          }

          <button onClick={deleteProfile} name="delete">Delete</button>
        </form>
      </div>
    </ProfileContainer>
  )
}

export default Profile;