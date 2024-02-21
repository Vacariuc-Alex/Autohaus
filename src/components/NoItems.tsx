import {Typography} from "@mui/material";
import React from "react";
import sadHeart from "../assets/img/SadHeart.png"
import {useSpring} from "react-spring";
import {NoItemContainer} from "../utils/styledComponents/NoItemsContainer";

const NoItems = () => {

    const animationProps = useSpring({
        from: {opacity: 0},
        opacity: 1,
        config: {duration: 2000},
    });

    return (
        <NoItemContainer style={animationProps} data-testid="no-item-container">
            <img
                data-testid="img-container"
                src={sadHeart}
                alt="Sad Heart"
                style={{width: 300, marginLeft: "calc((100% - 300px) / 2)"}}/>
            <Typography data-testid="typography-heading-container" variant="h3" gutterBottom>
                You don't have any favourite items!
            </Typography>
            <Typography data-testid="typography-paragraph-container" sx={{mt: 2}}>
                You can add an item to favourite by clicking on the heart that shows up when you hover over the picture!
            </Typography>
        </NoItemContainer>
    );
}

export default NoItems;
