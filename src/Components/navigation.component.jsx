import React, {useState} from "react";
import ReactBingmaps from 'react-bingmaps';

export const NavigationDisplay = () => {
    const [bingMapKey, setBingMapKey] = useState('Ai59GFS2Ml13slmtkMr89DE38ONr5pBX0bIx7OQPgSkeVkw7El_S91JfyWM9MBMl');
    return (
        <ReactBingmaps
            bingmapKey = "Ai59GFS2Ml13slmtkMr89DE38ONr5pBX0bIx7OQPgSkeVkw7El_S91JfyWM9MBMl"
        >
        </ReactBingmaps>
        );
};
