import { CssBaseline, Toolbar } from "@mui/material";
import React from "react";
import { Routes, Route } from "react-router";
import { Actors, MovieInfo, Movies, NavBar, Profile } from "./";
import { Content, Root } from "./styles";
export const App = () => (
  <Root>
    <CssBaseline />
    <NavBar />
    <Content>
      <Toolbar />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/movie/:id" element={<MovieInfo />} />
        <Route path="/actors/:id" element={<Actors />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </Content>
  </Root>
);
export default App;
