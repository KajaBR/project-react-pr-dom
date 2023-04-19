import React from "react";
import { Metrics } from "./Metrics";
import { Details } from "./Details";
import { Logo } from "./Logo";

export const Profile = () =>{
    return (
        <article class="profile">
            <div class="background"></div>
            <Logo/>
            <Details/>
            <div class="metrics">
            <Metrics/>
            </div>
        </article>
)
}