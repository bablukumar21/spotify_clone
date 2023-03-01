import React from "react";
import styled from "styled-components";


export default function Login() {
    const  handleClick = () => {
        const clientId = "acec11afd1d643848d1df939c37f2b89";
        const redirectUrl = "http://localhost:3000/";
        const api_uri = "https://accounts.spotify.com/authorize";
        const scope = [
        "user-read-private",
        "user-read-email",
        "user-modify-playback-state",
        "user-read-playback-state",
        "user-read-currently-playing",
        "user-read-recently-played",
         "user-top-read",
        
        ];
        window.location.href = `${api_uri}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
            " "
          )}&response_type=token&show_dialog=true`;
    };

    return (
        <Container>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgroPPCcuqFvDobRO1EDlR-ekMELw4PrEc1Q&usqp=CAU" alt="Spotify" />
            <button onClick={handleClick} >Connect to Spotify</button>
        </Container>
    );
}


const Container = styled.div`

display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: #1db954;
  gap: 5rem;
  img {
    height: 20vh;
  }
  button {
    padding: 1rem 5rem;
    border-radius: 5rem;
    background-color: black;
    color: #49f585;
    border: none;
    font-size: 1.4rem;
    cursor: pointer;
  }`;
