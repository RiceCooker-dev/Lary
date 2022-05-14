import { useWindowDimensions } from 'react-native';


import { responsiveWidth } from "../utils/helpers/pixelConverter";

const useBreakPoints = () : Array<Boolean> => {
    const { width } = useWindowDimensions();
    const isXl = width >= responsiveWidth(1280)
    const isLg = width >= responsiveWidth(1024) && width < responsiveWidth(1280)
    const isMd = width >= responsiveWidth(768) && width < responsiveWidth(1024)
    const isSm = width < responsiveWidth(768)
    return [isXl, isLg, isMd, isSm]
}

export default useBreakPoints