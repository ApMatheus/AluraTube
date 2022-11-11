import config from "../config.json";
import { CSSReset } from "../src/components/CSSReset";
import Header from "../src/components/Header";
import Menu from "../src/components/Menu";
import Timeline from '../src/components/Timeline';

function HomePage() {

    console.log(config)
    return (
        <>
            <CSSReset />
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                // backgroundColor: "red",
            }}>
                <Menu />
                
                <Timeline playlists = {config.playlists}>
                    Conteúdo
                </Timeline>
            </div>
        </>
    );
}

export default HomePage
