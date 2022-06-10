import { ReactElement } from "react";
import { Carousel } from "react-responsive-carousel";

interface Props {
    children: any;
}

const CarouselComponent: React.FC<Props> = ({ children }): ReactElement => {
    return <Carousel>{children}</Carousel>;
};

export default CarouselComponent;
