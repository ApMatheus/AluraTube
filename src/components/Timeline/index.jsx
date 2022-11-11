import React from "react";
import { Div } from "./styles"

function Timeline(propriedades) {
    // console.log("Dentro do componente", propriedades.playlists);
    const playlistNames = Object.keys(propriedades.playlists);
    console.log("playlistname:", playlistNames)
    // Statement
    // Retorno por expressão
    return (
        <Div>
            {playlistNames.map((playlistName) => {
                const videos = propriedades.playlists[playlistName];
                console.log("list:", playlistName);
                console.log("video:", videos);
                return (
                    <section>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos.map((video) => {
                                return (
                                    <a href={video.url}>
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </Div>
    )
}

export default Timeline;