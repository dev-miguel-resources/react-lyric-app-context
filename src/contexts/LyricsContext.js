import { createContext } from "react";
import {createContext} from 'react';



export const SongsContext = createContext();

return (
    <SongsContext.Provider value={{ name, pass, track, validateTrack}}>
                { children }
    </SongsContext.Provider>
);