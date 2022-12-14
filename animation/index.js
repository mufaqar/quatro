export const TextAnimation = {
    onScreen: {
        opacity: 1,
        y: 1
    },
    offScreen: {
        opacity: 0,
        y: '30px',
        scale: 1,
    }
}
export const BoxTextAnimation = {
    onScreen: {
        opacity: 1,
        y: 1,
        transition: {
          delay:1,
          staggerChildren: 1
        }
    },
    offScreen: {
        opacity: 0,
        y: '30px',
        scale: 1,
    }
}

export const ZoomAnimation = {
    onScreen: {
        opacity: 1,
        scale: 1
    },
    offScreen: {
        opacity: 0,
        scale: .7
    }
}

export const SlideUpAnimation = {
    onScreen: {
        opacity: 1,
        y: 1,
    },
    offScreen: {
        opacity: 0,
        y: '50px'
    }
}