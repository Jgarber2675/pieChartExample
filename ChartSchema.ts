export interface PieProps {
    labelDistanceToEdge? : number
    piePadToEdge? :  number
    strokeColor?: string
    strokeWidth? : number
    fontSize? : number
    font? : string
    width?  : number
    data? : {
        label: string
        value: number
    }[]
    colorStart?: string
    colorEnd?: string
}
export interface ChoroplethProps {
    data?: {
        name?: string,
        code?: string,
        pop?: number
    }[],
    width?: number,
    height?: number
}