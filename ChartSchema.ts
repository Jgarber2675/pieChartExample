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
}