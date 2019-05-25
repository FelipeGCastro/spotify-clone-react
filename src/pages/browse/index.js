import React from "react";

import { Container, Title, List, Playlist } from "./styles";

const Browse = () => (
  <Container>
    <Title>Navegar</Title>

    <List>
      <Playlist to="/playlists/1">
        <img
          src="https://i.pinimg.com/originals/3a/f0/e5/3af0e55ea66ea69e35145fb108b4a636.jpg"
          alt="playlist"
        />
        <strong>Rock dos bons</strong>
        <p>
          Relaxe equando você programa ouvindo apenas as melhores do rock
          mundial
        </p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img
          src="https://i.pinimg.com/originals/3a/f0/e5/3af0e55ea66ea69e35145fb108b4a636.jpg"
          alt="playlist"
        />
        <strong>Rock dos bons</strong>
        <p>
          Relaxe equando você programa ouvindo apenas as melhores do rock
          mundial
        </p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img
          src="https://i.pinimg.com/originals/3a/f0/e5/3af0e55ea66ea69e35145fb108b4a636.jpg"
          alt="playlist"
        />
        <strong>Rock dos bons</strong>
        <p>
          Relaxe equando você programa ouvindo apenas as melhores do rock
          mundial
        </p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img
          src="https://i.pinimg.com/originals/3a/f0/e5/3af0e55ea66ea69e35145fb108b4a636.jpg"
          alt="playlist"
        />
        <strong>Rock dos bons</strong>
        <p>
          Relaxe equando você programa ouvindo apenas as melhores do rock
          mundial
        </p>
      </Playlist>
    </List>
  </Container>
);

export default Browse;
