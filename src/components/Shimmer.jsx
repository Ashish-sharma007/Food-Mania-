export const ShimmerUi = () => {

    return (

        <div>
        <div className=" m-20 box-border h-72 w-80 p-4 border-4 border-gray-400 bg-gray-200"></div>
        </div>
    )
}

const Shimmer = () => {

    return (
       <div className=" flex flex-wrap"> { Array(15).fill( <ShimmerUi/>) } </div>
    )
}

export default Shimmer;